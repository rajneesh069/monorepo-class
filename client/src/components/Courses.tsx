import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";
import { BACKEND_URL } from "../config";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  allCoursesSelector,
  isCoursesLoadingSelector,
} from "../store/selectors/coursesSelector";
import { allCoursesState } from "../store/atoms/allCoursesState";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Grid,
  LinearProgress,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export type Course = {
  title: string;
  description: string;
  price: string;
  published: boolean;
  _id: string;
};

export default function Courses() {
  const navigate = useNavigate();
  const setCourses = useSetRecoilState(allCoursesState);
  const courses = useRecoilValue(allCoursesSelector);
  const isCoursesLoading = useRecoilValue(isCoursesLoadingSelector);
  useEffect(() => {
    async function init() {
      try {
        const response: {
          data: {
            courses: Course[];
          };
        } = await axios.get(`${BACKEND_URL}/admin/courses`, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response) {
          console.log(response);
          setCourses({
            isCoursesLoading: false,
            courses: response.data.courses,
          });
        } else {
          setCourses({
            isCoursesLoading: false,
            courses: null,
          });
        }
      } catch (error) {
        console.error(error);
        setCourses({
          isCoursesLoading: false,
          courses: null,
        });
      }
    }
    init();
  }, [setCourses]);
  if (isCoursesLoading) {
    console.log("Inside if");
    return <LinearProgress />;
  } else {
    return (
      <div
        style={{
          height: "94.8vh",
          backgroundImage:
            "url(https://astroncollege.org/wp-content/uploads/2020/01/courses.jpg)",
          maxWidth: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backdropFilter: "blur(4px)",
            backgroundColor: "rgba(0, 0, 0, 0)",
          }}
        ></div>
        <Grid
          padding={"2%"}
          position={"absolute"}
          zIndex={10}
          container
          spacing={2}
        >
          {courses?.map((course) => {
            return (
              <Grid key={uuidv4()} item>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {course.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {course.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      {course.price}
                    </Button>
                    <Button
                      onClick={() => {
                        navigate("/courses/" + course._id);
                      }}
                      size="small"
                      color="primary"
                    >
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  }
}
