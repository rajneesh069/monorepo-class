import { Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export default function Appbar() {
  const navigate = useNavigate();
  return (
    <div>
      <div
        style={{
          display: "flex",
          maxWidth: "100%",
          justifyContent: "space-between",
          margin: 0,
        }}
      >
        <div style={{ order: 0 }}>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <Typography color={"green"} variant="h5">
              Website
            </Typography>
          </Link>
        </div>
        <div style={{ order: 1 }}>
          <Button
            variant="contained"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
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
          &nbsp;
          <Button
            variant="contained"
            onClick={() => {
              navigate("/signin");
            }}
          >
            Signin
          </Button>
          &nbsp;
          <Button
            variant="contained"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Signup
          </Button>
        </div>
      </div>
    </div>
  );
}
