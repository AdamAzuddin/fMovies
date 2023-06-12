import { connectToDB } from "@utils/database";
import Comment from "@models/comment";
import { toast } from "react-toastify";

export const POST = async (req) => {
  const { userId, username, image, text, time } = await req.json();

  try {
    await connectToDB();

    // Check if the document already exists
    const existingData = await Comment.findOne({
      creator: userId,
      username: username,
      image: image,
      text: text,
      time: time,
    });

    if (existingData) {
      toast.info("Already added to the watched list", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return new Response("Already added to the watched list", {
        status: 409,
      });
    } else {
      // If the document doesn't exist, add it to the database
      const newData = new Comment({
        creator: userId,
        username: username,
        image: image,
        text: text,
        time: time,
      });

      await newData.save();

      return new Response(JSON.stringify(newData), { status: 201 });
    }
  } catch (error) {
    toast.error(`Failed to add to watch list: ${error}`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    return new Response(`Failed to add to watch list: ${error}`, {
      status: 500,
    });
  }
};
