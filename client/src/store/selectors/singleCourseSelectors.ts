import { selector } from "recoil";
import { singleCourseState } from "../atoms/singleCourseState";

export const singleCourseData = selector({
  key: "singleCourseSelector",
  get: ({ get }) => {
    const singleCourse = get(singleCourseState);
    if (singleCourse.course) {
      return singleCourse.course;
    }
  },
});
