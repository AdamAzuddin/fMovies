import { connectToDB } from "@utils/database";
import Favourite from "../../../../../models/favourite";

export const GET = async ( req, { params }) => {

    try {
        await connectToDB()

        const list = await Favourite.find({ creator: params.id }).populate("creator")

        return new Response(JSON.stringify(list), { status: 200 })
    } catch (error) {
        return new Response(`Failed to fetch user's favourites list, ${error}`, { status: 500 })
    }
} 