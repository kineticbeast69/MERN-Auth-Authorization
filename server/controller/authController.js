import { AuthModel } from "../model/authModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.SECRET_KEY;
// regsiter function
const signupAuth = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    // checking the user register or not
    const checkUser = await AuthModel.findOne({ email });
    if (checkUser)
      return res.status(409).json({ message: "User already exists." });

    const salt = await bcrypt.genSalt(10); //salting the password
    const hashPassword = await bcrypt.hash(password, salt); //hashing the password

    //   adding the user
    const addUser = new AuthModel({
      username,
      password: hashPassword,
      email,
    });
    await addUser.save();
    return res.status(201).json({ message: "User added succesfully." }); //sending the success message for adding the user
  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
};

// login function
const loginAuth = async (req, res) => {
  const { email, password } = req.body;
  try {
    const checkUser = await AuthModel.findOne({ email }).select(
      "-updatedAt -createdAt"
    );

    //   checking the user email is register or not
    if (!checkUser)
      return res.status(409).json({ message: "Email not found." });

    //   checking the user password is correct or not
    const checkPassword = await bcrypt.compare(password, checkUser.password); //comparing the password
    if (!checkPassword)
      return res
        .status(409)
        .json({ message: "Incorrect Password! Please try again." });
    const userInfo = checkUser.toObject(); //converting to plain object
    const token = jwt.sign(userInfo, SECRET_KEY, {
      expiresIn: "1h",
    }); //setting the token

    const cookie = res.cookie("token", token, {
      httpOnly: true,
      secure: false, // Set to true in production (HTTPS required)
      sameSite: "lax",
      maxAge: 3600000,
    }); //setting the cokkie
    // console.log(req.cookies);
    return res.status(201).json({ message: "User logged in Succesfully." });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error", error });
  }
};

const authUser = async (req, res) => {
  const { _id, username, role, email } = req.user;
  // console.log(req.cookies.token);
  return res
    .status(201)
    .json({ message: "Valid user", user: { _id, username, role, email } });
};

const deleteAuth = async (req, res) => {
  try {
    res.clearCookie("token", {
      sameSite: "lax",
      secure: false,
      httpOnly: true,
    });
    return res.status(201).json({ message: "User logout succesfully." });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Technical error! Wait for Sometime." });
  }
};

export { signupAuth, loginAuth, authUser, deleteAuth };
