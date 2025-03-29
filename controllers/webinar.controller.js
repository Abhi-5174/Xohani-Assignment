import Webinar from "../models/webinar.model.js";
import User from "../models/user.model.js";

const addWebinar = async (req, res, next) => {
  const {
    title,
    short_description,
    description,
    enrollment_date,
    price,
    status,
    userId,
  } = req.body;
  try {
    const newWebinar = await Webinar.create({
      title,
      short_description,
      description,
      enrollment_date,
      price,
      status,
      userId,
    });

    const user = await User.findOne(userId);

    user.webinars.push(newWebinar._id);

    await user.save();

    res
      .status(201)
      .json({ message: "Webinar created successfully.", data: newWebinar });
  } catch (error) {
    next(error);
  }
};

const getWebinars = async (req, res, next) => {
  try {
    const filter = {};
    const sorting = {};

    let { page, limit, sort, search } = req.query;

    page = parseInt(page) || 1;
    limit = parseInt(limit) || 10;

    const skip = (page - 1) * limit;

    if (sort) {
      sorting[sort] = 1;
    }

    if (search) {
      filter.title = { $regex: search, options: "i" };
    }

    const webinars = await Webinar.find(filter)
      .sort(sorting)
      .skip(skip)
      .limit(limit);

    const total = await Webinar.countDocuments(filter);

    res.json({
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      data: webinars,
    });
  } catch (error) {
    next(error);
  }
};

const updateWebinar = async (req, res, next) => {
  const { webinarId } = req.body;
  if (!webinarId)
    return res.status(400).json({ message: "Webinar Id is required!" });
  try {
    const updatedWebinar = await Webinar.findByIdAndUpdate(
      webinarId,
      req.body,
      { new: true }
    );

    res.status(200).json({
      message: "Webinar updated.",
      data: updatedWebinar,
    });
  } catch (error) {
    next(error);
  }
};

const deleteWebinar = async (req, res, next) => {
  const { webinarId } = req.body;
  if (!webinarId)
    return res.status(400).json({ message: "Webinar Id is required!" });
  try {
    await Webinar.findByIdAndDelete(webinarId);

    res.status(200).json({
      message: "Webinar deleted.",
    });
  } catch (error) {
    next(error);
  }
};

export { addWebinar, getWebinars, updateWebinar, deleteWebinar };
