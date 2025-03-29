import jwt from "jsonwebtoken";

const generateToken = async (userID) => {
  return jwt.sign({ userID }, process.env.JWT_SECRET, { expiresIn: "24h" });
};

const verifyToken = async (token) => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  return decoded;
};

export { generateToken };
