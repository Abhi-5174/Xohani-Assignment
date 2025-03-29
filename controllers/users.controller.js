import User from "../models/user.model.js";

const userProfile = async (req, res, next) => {
  const { userId } = req.body;
  if (!userId) return res.status(400).json({ message: "UserId is required!" });
  try {
    const user = await User.findById(userId).select("-password");
    if (!user) return res.status(404).json({ message: "User not found!" });

    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export { userProfile };
