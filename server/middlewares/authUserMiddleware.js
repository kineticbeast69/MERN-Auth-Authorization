import jwt from "jsonwebtoken";
const SECRET_KEY = "My name is Shubham Tiwari.The secret key is 'nothing'.";
const verifyToken = async (req, res, next) => {
  const token = req.cookies.token; //getting the toekn from cookie
  if (!token) return res.status(409).json({ message: "Unauthorized User." });
  jwt.verify(token, SECRET_KEY, (error, decoded) => {
    //verifying the token
    if (error) return res.status(409).json({ message: "Invalid token." });
    req.user = decoded;
    next();
  });
};
export default verifyToken;
