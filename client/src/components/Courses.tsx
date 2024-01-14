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

type Course = {
  title: string;
  description: string;
  price: string;
  published: boolean;
};

export default function Courses() {
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
      <Grid container margin={"1%"} spacing={2}>
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
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    );
  }
}
