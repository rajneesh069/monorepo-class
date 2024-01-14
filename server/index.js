import express from "express";

const app = express();
import adminRouter from "./routes/adminRoutes.js";
import userRouter from "./routes/userRoutes.js";

//for forms to parse request body and make it available in req.body
// app.use(express.urlencoded({ extended: true }));
// for json to parse req.body
app.use(express.json());
app.use("/users", userRouter);
app.use("/admin", adminRouter);
//Course === db.collection

app.listen(3000, () => {
    console.log("Server is running at port 3000");
})
