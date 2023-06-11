import { connectToDB } from "@utils/database";
import Watched from "@models/watched"

export const GET = async ( req, { params }) => {

    try {
        await connectToDB()

        const list = await Watched.find({ creator: params.id }).populate("creator")

        return new Response(JSON.stringify(list), { status: 200 })
    } catch (error) {
        return new Response(`Failed to fetch user's watched list, ${error}`, { status: 500 })
    }
} 