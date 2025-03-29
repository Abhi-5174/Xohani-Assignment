import mongoose from "mongoose";

export default async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("Connected to mongoDb");
  } catch (error) {
    console.log("Unable to connect to mongoDB\n", error);
    process.exit(1);
  }
};
