import express from "express";

import authRouter from "./auth.routes.js";
import userRouter from "./user.routes.js";
import webinarRouter from "./webinar.routes.js";

const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({ message: "Welcome to the home route." });
});

router.use("/auth", authRouter);

router.use("/users", userRouter);

router.use("/webinars", webinarRouter);

router.get("/error", (req, res, next) => {
  try {
    const error = new Error("Checking error route.");
    error.status = 501;
    throw error;
  } catch (error) {
    next(error);
  }
});

export default router;
