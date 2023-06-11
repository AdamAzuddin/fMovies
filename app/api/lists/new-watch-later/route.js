import { connectToDB } from "@utils/database";
import WatchLater from "@models/watchLater";
import { toast } from "react-toastify";

export const POST = async (req) => {
  const { userId, movie } = await req.json();
  const movieString = JSON.stringify(movie);

  try {
    await connectToDB();

    // Check if the document already exists
    const existingData = await WatchLater.findOne({
      creator: userId,
      data: movieString,
    });

    if (existingData) {
      toast.info('Already added to the watch later list', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      return new Response("Already added to the watch later list", {
        status: 409,
      });
    } else {
      // If the document doesn't exist, add it to the database
      const newData = new WatchLater({ creator: userId, data: movieString });

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
