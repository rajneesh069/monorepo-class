import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        margin: 0,
        padding: 0,
      }}
    >
      <Typography gutterBottom variant="h5" marginRight={"2%"} component="div">
        Welcome. Please Sign up.
      </Typography>
      <Card sx={{ maxWidth: "30%" }}>
        <CardContent>
          <Grid container>
            <Grid item sm={12}>
              <TextField
                onChange={(event) => {
                  const { value } = event.target;
                  setUsername(value);
                }}
                value={username}
                placeholder={"Username"}
                fullWidth
                sx={{ marginBottom: "2%" }}
                autoComplete="off"
                autoFocus
              />
              <TextField
                onChange={(event) => {
                  const { value } = event.target;
                  setPassword(value);
                }}
                value={password}
                placeholder={"Password"}
                fullWidth
                autoComplete="off"
              />
            </Grid>
            <Grid item sm={12} display={"flex"} justifyContent={"center"}>
              <Button
                onClick={async () => {
                  const response = await fetch(
                    "http://localhost:3000/users/signup",
                    {
                      method: "POST",
                      body: JSON.stringify({ username, password }),
                      headers: {
                        "Content -Type": "application/json",
                      },
                    }
                  );
                  console.log(response);
                }}
                type="submit"
                variant={"contained"}
                sx={{ marginTop: "2%" }}
              >
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}
