import { connectToDB } from "@utils/database";
import WatchLater from "@models/watchLater";

export const GET = async ( req, { params }) => {

    try {
        await connectToDB()

        const list = await WatchLater.find({ creator: params.id }).populate("creator")
        
        return new Response(JSON.stringify(list), { status: 200 })
    } catch (error) {
        return new Response(`Failed to fetch user's watch later list, ${error}`, { status: 500 })
    }
} 