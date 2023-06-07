import { connectToDB } from "@utils/database";
import Favourite from "@models/favourite"

export const GET = async ( req, { params }) => {
    console.log(params.id)
    try {
        await connectToDB()

        const list = await Favourite.find({ creator: params.id }).populate("creator")
        console.log(list)

        return new Response(JSON.stringify(list), { status: 200 })
    } catch (error) {
        return new Response(`Failed to fetch prompts created by user, ${error}`, { status: 500 })
    }
} 