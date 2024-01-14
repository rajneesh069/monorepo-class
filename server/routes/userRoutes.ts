import express, { Request, Response } from "express";
const router = express.Router();
import { Course, User } from "../db/mongooseModels.js";
import { createJWT } from "../middlewares/middleware.js";
import { z } from "zod";

export const userInput = z.object({
  username: z.string().min(6),
  password: z.string().min(8).max(12),
});

router.post("/signup", async (req: Request, res: Response) => {
  try {
    const parsedData = userInput.safeParse(req.body);
    if (!parsedData.success) {
      res.status(403).json({ message: "Invalid Input" });
      return;
    }
    const { username, password } = parsedData.data;
    const isUser = await User.findOne({ username });
    if (isUser) {
      res.status(403).json({ message: "User already exists" });
    } else {
      const newUser = new User({
        username,
        password,
      });
      await newUser.save();
      const token = createJWT({ username, password });
      res
        .status(200)
        .json({ message: "Account created successfully", username, token });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal DB error" });
    console.error(error);
  }
});

router.post("/signin", async (req: Request, res: Response) => {
  try {
    const { username, password }: { username: string; password: string } =
      req.body;
    const isUser = await User.findOne({ username, password });
    if (isUser) {
      res.status(200).json({ message: "Signed in successfully!" });
    } else {
      res.status(401).json({ message: "Account doesn't exist!" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal DB error" });
    console.error(error);
  }
});

router.get("/courses", async (req: Request, res: Response) => {
  const courses = await Course.find({});
  res.status(200).json({ courses });
});

router.get("/courses/:courseId", async (req: Request, res: Response) => {
  const { courseId } = req.params;
  try {
    const course = await Course.findOne({ _id: courseId });
    if (course) {
      res.status(200).json({ course });
      return;
    }
    res.status(404).json({ message: "Course Not Found" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal DB error" });
  }
});

export default router;
