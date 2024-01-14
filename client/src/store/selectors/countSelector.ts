import { selector } from "recoil";
import { countState } from "../atoms/countState";

export const countSelector = selector({
  key: "countSelector",
  get: ({ get }) => {
    return get(countState);
  },
});
