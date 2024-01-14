import express from "express";
const router = express.Router();
import { Course, User } from "../db/mongooseModels.js";
import { createJWT } from "../middlewares/middleware.js";

router.post("/signup", async (req, res) => {
    try {
        const { username, password } = req.body;
        const isUser = await User.findOne({ username });
        if (isUser) {
            res.status(403).json({ message: "User already exists" });
        } else {
            const newUser = new User({
                username, password
            });
            await newUser.save();
            const token = createJWT({ username, password });
            res.status(200).json({ message: "Account created successfully", username, token });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal DB error" });
        console.error(error);
    }
});

router.post("/signin", async (req, res) => {
    try {
        const { username, password } = req.body;
        const isUser = await User.findOne({ username, password });
        if (isUser) {
            res.status(200).json({ message: "Signed in successfully!" });
        } else {
            res.status(401).json({ message: "Account doesn't exist!" })
        }
    } catch (error) {
        res.status(500).json({ message: "Internal DB error" });
        console.error(error);
    }
})

router.get("/courses", async (req, res) => {
    const courses = await Course.find({});
    res.status(200).json({ courses });
});

router.get("/courses/:courseId", async (req, res) => {
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
        res.status(500).json({ message: "Internal DB error" })
    }
});

export default router;