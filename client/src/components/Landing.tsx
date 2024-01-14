import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();
  return (
    <div
      id="container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
        backgroundImage: "url(https://www.questpond.com/img/2.png)",
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
      <div style={{ position: "absolute", zIndex: 10 }}>
        <Typography variant="h2" color={"greenyellow"}>
          Website
        </Typography>
        <Button
          variant="contained"
          onClick={() => {
            navigate("/signin");
          }}
        >
          SignIn
        </Button>
        &nbsp;
        <Button
          variant="contained"
          onClick={() => {
            navigate("/courses");
          }}
        >
          Courses
        </Button>
      </div>
    </div>
  );
}
