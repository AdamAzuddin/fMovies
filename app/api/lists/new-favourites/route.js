import { connectToDB } from "@utils/database";
import Favourite from "../../../../models/favourite";

export const POST = async (req) => {
  const { userId, movie } = await req.json();
  const movieString = JSON.stringify(movie);
  try {
    await connectToDB();

    const data = new Favourite({ creator: userId, data: movieString });
    console.log("Added", data);

    await data.save();

    return new Response(JSON.stringify(data), { status: 201 });
  } catch (error) {
    return new Response(`Failed to add to watch list: ${error}`, {
      status: 500,
    });
  }
};
