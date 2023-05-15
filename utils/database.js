import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  if (isConnected) {
    mongoose.set("strictQuery", true);
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
        dbName: "fMoviesDB",
        useNewUrkParser: true,
        useUnifiedTopology:true,
    })

    isConnected=true
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log(error);
  }
};
