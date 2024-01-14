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
import { Course } from "../db/mongooseModels.js";
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
router.post("/courses", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description, price, published, } = req.body;
        const newCourse = new Course({
            title,
            description,
            price,
            published,
        });
        const savedCourse = yield newCourse.save();
        res
            .status(200)
            .json({ message: "Course saved successfully!", savedCourse });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Course save failed!" });
    }
}));
router.put("/courses/:courseId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { courseId } = req.params;
    const { title, description, price, published, } = req.body;
    const course = yield Course.findByIdAndUpdate(courseId, { title, description, price, published }, { new: true });
    if (course) {
        res.status(200).json({ course });
    }
    else {
        res.status(400).json({ message: "Course didn't update!" });
    }
}));
router.delete("/courses/:courseId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { courseId } = req.params;
    const course = yield Course.findByIdAndDelete(courseId);
    if (course) {
        res.status(200).json({ course });
    }
    else {
        res.status(400).json({ message: "Course didn't delete!" });
    }
}));
export default router;
