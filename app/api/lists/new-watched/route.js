import { connectToDB } from "@utils/database";
import Watched from "@models/watched";

export const POST = async (req) => {
  const { userId, movie } = await req.json();
  const movieString = JSON.stringify(movie);

  try {
    await connectToDB();

    // Check if the document already exists
    const existingData = await Watched.findOne({
      creator: userId,
      data: movieString,
    });

    if (existingData) {
      console.log("Movie already exists in the watch list");
      return new Response("Movie already exists in the watch list", {
        status: 409,
      });
    } else {
      // If the document doesn't exist, add it to the database
      const newData = new Watched({ creator: userId, data: movieString });
      console.log("Added", newData);

      await newData.save();

      return new Response(JSON.stringify(newData), { status: 201 });
    }
  } catch (error) {
    return new Response(`Failed to add to watch list: ${error}`, {
      status: 500,
    });
  }

};
