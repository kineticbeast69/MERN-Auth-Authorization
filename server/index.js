import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import Routes from "./routes/authRoutes.js";

dotenv.config(); // Load environment variables
const app = express();

const PORT = process.env.PORT || 4000;
const DB_URL = process.env.DB_URL;
const CLIENT_URL = process.env.CLIENT_URL;

// Middlewares
app.use(cors({ origin: CLIENT_URL, credentials: true })); // Enable CORS
app.use(express.json()); // Parse JSON requests
app.use(cookieParser()); // Enable cookie handling

// Database connection & server start
mongoose
  .connect(DB_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server started at port ${PORT}`);
    });
    console.log("Database connected successfully.");
  })
  .catch((err) => console.log("Database connection error:", err));

// Routes
app.use("/Api", Routes);
