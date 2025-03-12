import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import Routes from "./routes/authRoutes.js";

const app = express();

const PORT = 3000;
const DB_URL = "mongodb://localhost:27017/MERN-Auth_Authorization";

// middlewares
app.use(cors({ origin: "http://localhost:5173", credentials: true })); //cors middleware
app.use(express.json()); //json middleware
app.use(cookieParser()); // cookie middleware

// making the connection with database and starting the server
mongoose
  .connect(DB_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server started at ${PORT}`);
    });
    console.log("database connected.");
  })
  .catch((err) => console.log(err));

// route middleware is here
app.use("/Api", Routes);
