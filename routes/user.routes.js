import express from "express";

import { userProfile } from "../controllers/users.controller.js";

const userRouter = express.Router();

userRouter.get("/profile", userProfile);

export default userRouter;
