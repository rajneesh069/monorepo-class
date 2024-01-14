import Appbar from "./components/Appbar";
import Course from "./components/Course";
import Courses from "./components/Courses";
import Landing from "./components/Landing";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <Router>
      <Appbar />
      <Routes>
        <Route path={"/signup"} element={<Signup />} />
        <Route path={"/signin"} element={<Signin />} />
        <Route path={"/"} element={<Landing />} />
        <Route path={"/courses"} element={<Courses />} />
        <Route path={"/courses/:courseId"} element={<Course />} />
      </Routes>
    </Router>
  );
}
