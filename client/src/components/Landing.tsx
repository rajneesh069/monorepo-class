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
        height: "100vh",
      }}
    >
      <div style={{ order: 0, marginRight: "2%" }}>
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
      <div style={{ order: 1 }}>
        <img
          src="https://www.questpond.com/img/2.png"
          style={{ background: "none" }}
          height={200}
          width={300}
        />
      </div>
    </div>
  );
}
