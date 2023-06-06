import { connectToDB } from "@utils/database"
import WatchLater from "@models/watchLater";

export const POST = async (req) => {
    const {userId, movie} = await req.json()

    try {
        await connectToDB()

        const data = new WatchLater({creator: userId, movie})
        console.log("Added", data)

        return new Response(JSON.stringify(data), {status: 201})
    } catch (error) {
        return new Response(`Failed to add to watch list: ${error}`, {status: 500})
    }
}