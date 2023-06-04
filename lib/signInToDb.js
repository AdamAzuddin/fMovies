import { connectToDB } from "@utils/database";
import User from "@models/user";

async function signInUserToDb({ profile }) {
  console.log(profile);
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
    console.log(error);
    return false;
  }
}

export { signInUserToDb };
