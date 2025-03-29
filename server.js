import "dotenv/config";

import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";

import router from "./routes/index.js";
import connectDB from "./config/db.js";
import errorHandler from "./middlewares/errorHandler.js";
import isAuthenticated from "./middlewares/auth.middleware.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // Allowing any domain for now.
app.use(helmet());
app.use(cookieParser());

app.use(isAuthenticated); // Using authentication for every route.

app.use("/", router);

app.use(errorHandler); // Custom error handler.

app.listen(PORT, () => {
  connectDB();
  console.log("Server started on http://localhost:" + PORT);
});
