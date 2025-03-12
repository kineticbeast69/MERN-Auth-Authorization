import mongoose from "mongoose";

const authSchema = mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["user", "admin", "author"], // Fixed enum values
      default: "user",
    },
  },
  { timestamps: true } // Adds createdAt and updatedAt
);

export const AuthModel = mongoose.model("MERN-Auths", authSchema);
