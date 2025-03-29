import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  FullName: {
    type: String,
    required: true,
    minlength: [3, "Name should be minimum 3 characters long."],
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: [6, "Password should be minimum 6 characters long."],
    trim: true,
  },
  image: {
    type: String,
  },
  webinars: [{ type: mongoose.Schema.Types.ObjectId, ref: "Webinar" }],
});

const User = mongoose.model("User", userSchema);

export default User;
