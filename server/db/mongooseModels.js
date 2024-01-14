import mongoose from "mongoose";
mongoose.connect("mongodb://127.0.0.1:27017/testAppDB");

const courseSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: String,
    published: {
        type: Boolean,
    },
});

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
})

const adminSchema = new mongoose.Schema({
    username: String,
    password: String,
})

export const Course = mongoose.model("course", courseSchema);
export const User = mongoose.model("user", userSchema);
export const Admin = mongoose.model("admin", adminSchema);
