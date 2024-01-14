var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
const router = express.Router();
import { Course, User } from "../db/mongooseModels.js";
import { createJWT } from "../middlewares/middleware.js";
import { z } from "zod";
export const userInput = z.object({
    username: z.string().min(6),
    password: z.string().min(8).max(12),
});
router.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const parsedData = userInput.safeParse(req.body);
        if (!parsedData.success) {
            res.status(403).json({ message: "Invalid Input" });
            return;
        }
        const { username, password } = parsedData.data;
        const isUser = yield User.findOne({ username });
        if (isUser) {
            res.status(403).json({ message: "User already exists" });
        }
        else {
            const newUser = new User({
                username,
                password,
            });
            yield newUser.save();
            const token = createJWT({ username, password });
            res
                .status(200)
                .json({ message: "Account created successfully", username, token });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Internal DB error" });
        console.error(error);
    }
}));
router.post("/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        const isUser = yield User.findOne({ username, password });
        if (isUser) {
            res.status(200).json({ message: "Signed in successfully!" });
        }
        else {
            res.status(401).json({ message: "Account doesn't exist!" });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Internal DB error" });
        console.error(error);
    }
}));
router.get("/courses", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const courses = yield Course.find({});
    res.status(200).json({ courses });
}));
router.get("/courses/:courseId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { courseId } = req.params;
    try {
        const course = yield Course.findOne({ _id: courseId });
        if (course) {
            res.status(200).json({ course });
            return;
        }
        res.status(404).json({ message: "Course Not Found" });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal DB error" });
    }
}));
export default router;
