import mongoose from "mongoose";

const webinarSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: [3, "Webinar title should be minimum 3 characters"],
    trim: true,
  },
  short_description: {
    type: String,
    required: true,
    minlength: [10, "Webinar description should be minimum 10 characters"],
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  enrollment_date: {
    type: Date,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  video: {
    type: String,
    // required: true,
  },
  transcript: {
    type: String,
  },
  status: {
    type: Boolean,
    default: false,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Webinar = mongoose.model("Webinar", webinarSchema);

export default Webinar;
