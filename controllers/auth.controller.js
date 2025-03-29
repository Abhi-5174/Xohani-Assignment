import bcrypt from "bcryptjs";

import User from "../models/user.model.js";
import saveCookie from "../utils/cookie.js";
import { generateToken } from "../utils/jwt.js";

const postLogin = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ message: "email and password is required!" });
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "Invalid Credentials!" });

    const isMatch = bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid Credentials!" });

    const token = generateToken(user._id);
    saveCookie("auth_token", token, res);

    res.status(200).json({ message: "User can login successfully." });
  } catch (error) {
    next(error);
  }
};

const postSignup = async (req, res, next) => {
  const { fullName, email, password } = req.body;
  if (!fullName || !email || !password)
    return res.status(400).json({ message: "All fields are required!" });
  try {
    const user = await User.findOne({ email });
    if (user) return res.status(404).json({ message: "User already exists!" });

    const hashedPassword = await bcrypt.hash(
      password,
      parseInt(process.env.BCRYPT_SALTS_ROUND)
    );

    const newUser = await User.create({
      fullName,
      email,
      password: hashedPassword,
    });

    const token = generateToken(newUser._id);
    saveCookie("auth_token", token, res);

    res.status(201).json({ message: "User created successfully.", data: newUser, token });
  } catch (error) {
    next(error);
  }
};

export { postLogin, postSignup };
