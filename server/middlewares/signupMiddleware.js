import Joi from "joi";

// signup schema
const signupSchema = Joi.object({
  username: Joi.string().min(8).max(25).required().messages({
    "any.required": "Username is required.",
    "string.min": "Username must have 8 characters",
    "string.max": "Username cannot be more than 25 characters.",
  }),
  email: Joi.string().email().required().messages({
    "any.required": "email is required.",
    "string.email": "Enter valid email.",
  }),
  password: Joi.string().min(5).max(10).required().messages({
    "any.required": "Password is required.",
    "string.min": "Password must have 5 characters.",
    "string.max": "Password cannot be more than 10 characters.",
  }),
});

// validating the signup
const signupMiddleware = (req, res, next) => {
  const { error } = signupSchema.validate(req.body);
  if (error) return res.status(409).json({ message: error.details[0].message });
  next();
};

export default signupMiddleware;
