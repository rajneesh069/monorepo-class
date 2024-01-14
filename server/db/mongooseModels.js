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
    username: { type: String, required: true },
    password: { type: String, required: true },
    // purchasedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: "courses" }]
})
/**
 * [a.id, b.id]
 * const user = await User.findOne({username, password}). .populate('purchasedCourses');
 * user  : {
 * username : "something",
 * password : "....",
 * purchasedCourses : [{
 *                  _id : a.id,
 *                  title : a,
 *                   desc : a.desc,
 *                  price : a.price,
 *                   },{
 *                          _id : b.id,
 *                      title : b,
 *                      desc : b.desc,
 *                      price : b.price,
 *                              }]
 *                                } 
 * /purchasedCourses/:courseId -> const {courseId} =  req.params;
 * const foundCourse  = user.purchasedCourses.find((purchasedCourse)=>{
 * return purchasedCourse.id == courseId
 * })
 *                         
 * 
 */

const adminSchema = new mongoose.Schema({
    username: String,
    password: String,
})

export const Course = mongoose.model("course", courseSchema);
export const User = mongoose.model("user", userSchema);
export const Admin = mongoose.model("admin", adminSchema);
