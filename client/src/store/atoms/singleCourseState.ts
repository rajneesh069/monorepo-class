import { atom } from "recoil";
import { Course } from "./allCoursesState";

//Course is single course
interface Atom<T> {
  isSingleCourseLoading: boolean;
  course: T | null;
}
export const singleCourseState = atom<Atom<Course>>({
  key: "singleCourseState",
  default: {
    isSingleCourseLoading: true,
    course: null,
  },
});
