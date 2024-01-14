import express from "express";
const router = express.Router();
import { Course } from "../db/mongooseModels.js";

router.get("/courses", async (req, res) => {
  const courses = await Course.find({});
  res.status(200).json({ courses });
});

router.get("/courses/:courseId", async (req, res) => {
  const { courseId }: { courseId: string } = req.params;
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

router.post("/courses", async (req, res) => {
  try {
    const {
      title,
      description,
      price,
      published,
    }: {
      title: string;
      description: string;
      price: string;
      published: boolean;
    } = req.body;
    const newCourse = new Course({
      title,
      description,
      price,
      published,
    });
    const savedCourse = await newCourse.save();
    res
      .status(200)
      .json({ message: "Course saved successfully!", savedCourse });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Course save failed!" });
  }
});

router.put("/courses/:courseId", async (req, res) => {
  const { courseId } = req.params;
  const {
    title,
    description,
    price,
    published,
  }: {
    title: string;
    description: string;
    price: string;
    published: boolean;
  } = req.body;
  const course = await Course.findByIdAndUpdate(
    courseId,
    { title, description, price, published },
    { new: true }
  );
  if (course) {
    res.status(200).json({ course });
  } else {
    res.status(400).json({ message: "Course didn't update!" });
  }
});

router.delete("/courses/:courseId", async (req, res) => {
  const { courseId } = req.params;
  const course = await Course.findByIdAndDelete(courseId);
  if (course) {
    res.status(200).json({ course });
  } else {
    res.status(400).json({ message: "Course didn't delete!" });
  }
});

export default router;
