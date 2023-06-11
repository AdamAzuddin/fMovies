import { connectToDB } from "@utils/database";
import User from "@models/user";
import {toast} from "react-toastify"

async function signInUserToDb({ profile }) {

  try {
    await connectToDB();
    //check if user already exist
    const userExist = await User.findOne({
      email: profile.email,
    });
    //if not, create user and add to db
    if (!userExist) {
      await User.create({
        email: profile.email,
        username: profile.name.replace(" ", "").toLowerCase(),
        image: profile.picture,
      });
    }

    return true;
  } catch (error) {
    toast.error(`Falied to sign in. ${error}`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    return false;
  }
}

export { signInUserToDb };
