import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { singleCourseState } from "../store/atoms/singleCourseState";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { singleCourseData } from "../store/selectors/singleCourseSelectors";

type SingleCourse = {
  title: string;
  description: string;
  price: string;
  published: boolean;
  _id: string;
};
export default function Course() {
  const setSingleCourse = useSetRecoilState(singleCourseState);
  const { courseId } = useParams();
  const course = useRecoilValue(singleCourseData);
  useEffect(() => {
    async function init() {
      try {
        const response: {
          data: {
            course: SingleCourse;
          };
        } = await axios.get(`${BACKEND_URL}/admin/courses/${courseId}`, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response) {
          console.log(response);
          setSingleCourse({
            isSingleCourseLoading: false,
            course: response.data.course,
          });
        } else {
          console.log(response);
          setSingleCourse({
            isSingleCourseLoading: false,
            course: null,
          });
        }
      } catch (error) {
        console.error(error);
        setSingleCourse({
          isSingleCourseLoading: false,
          course: null,
        });
      }
    }
    init();
  }, [courseId, setSingleCourse]);
  return (
    <div>
      <div>{course?._id}</div>
      <div>{course?.title}</div>
      <div>{course?.description}</div>
      <div>{course?.price}</div>
      <div>{course?.published}</div>
    </div>
  );
}


