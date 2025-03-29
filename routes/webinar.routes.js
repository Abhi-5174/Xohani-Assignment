import express from "express";

import {
  addWebinar,
  getWebinars,
  updateWebinar,
  deleteWebinar,
} from "../controllers/webinar.controller.js";

const webinarRouter = express.Router();

webinarRouter.post("/add", addWebinar);

webinarRouter.get("/", getWebinars);

webinarRouter.put("/update/:webinarId", updateWebinar);

webinarRouter.delete("/delete/:webinarId", deleteWebinar);

export default webinarRouter;
