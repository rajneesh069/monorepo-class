import { selector } from "recoil";
import { allCoursesState } from "../atoms/allCoursesState";

export const allCoursesSelector = selector({
  key: "allCoursesSelector",
  get: ({ get }) => {
    const state = get(allCoursesState);
    if (state.courses) {
      return state.courses;
    }
  },
});

export const isCoursesLoadingSelector = selector({
  key: "isCoursesLoadingSelector",
  get: ({ get }) => {
    const state = get(allCoursesState);
    return state.isCoursesLoading;
  },
});
