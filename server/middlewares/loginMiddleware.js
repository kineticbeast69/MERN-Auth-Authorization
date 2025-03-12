import Joi from "joi";

// login validation schema
const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "any.required": "Email is required.",
    "string.email": "Email is Invalid.",
  }),
  password: Joi.string().min(5).max(10).required().messages({
    "any.required": "Password is required.",
    "string.min": "Password must have 5 characters",
    "string.max": "Password cannot be more than 10 characters.",
  }),
});

// validating the login schema
const loginMiddleware = (req, res, next) => {
  const { error } = loginSchema.validate(req.body);
  if (error) return res.status(409).json({ message: error.details[0].message });
  next();
};

export default loginMiddleware;
