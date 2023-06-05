import { connectToDB } from "@utils/database"
import User from "@models/user"

export const POST = async (req) => {
    const {email, movie} = await req.json()

    try {
        await connectToDB()

        const newWatchList = await User.findOneAndUpdate(
            {email: email},
            { $push: {watchLater: movie}},
            {new: true}
        )
        console.log("Added", newWatchList)

        return new Response(JSON.stringify(newWatchList), {status: 201})
    } catch (error) {
        return new Response(`Failed to add to watch list: ${error}`, {status: 500})
    }
}