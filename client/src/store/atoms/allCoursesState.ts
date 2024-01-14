import { atom } from "recoil";
export type Course = {
  title: string;
  description: string;
  price: string;
  published: boolean;
  _id: string;
};

export interface Atom<T> {
  isCoursesLoading: boolean;
  courses: T | null;
}

//Courses is an array of Course.
export const allCoursesState = atom<Atom<Course[]>>({
  key: "coursesState",
  default: {
    isCoursesLoading: true,
    courses: null,
  },
});
