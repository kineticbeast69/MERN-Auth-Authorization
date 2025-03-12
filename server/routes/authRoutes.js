import express from "express";
import {
  signupAuth,
  loginAuth,
  authUser,
  deleteAuth,
} from "../controller/authController.js";
import signupMiddleware from "../middlewares/signupMiddleware.js";
import loginMiddleware from "../middlewares/loginMiddleware.js";
import verifyToken from "../middlewares/authUserMiddleware.js";
const Routes = express.Router();

Routes.post("/register", signupMiddleware, signupAuth); //sign up page route api
Routes.post("/login", loginMiddleware, loginAuth); //login page api route
Routes.get("/protected", verifyToken, authUser); //validating the user.
Routes.delete("/logout", deleteAuth);
export default Routes;
