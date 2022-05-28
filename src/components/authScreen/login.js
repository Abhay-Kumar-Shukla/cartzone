//Login Page

import { React, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { db, auth } from "../../services/firebase";
import {
  signInWithEmailAndPassword,
} from "firebase/auth";
import {useNavigate} from 'react-router-dom';
//display copyright text
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="#">
        Cartzone
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
// Main login logic
export default function Login() {
  const [displayName, setdisplayName] = useState("");
  const [displayNameError, setdisplayNameError] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [emailError, setemailError] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [signUpMode, setsignUpMode] = useState(false);
  const [confirmPassword, setconfirmPassword] = useState("");
  const [firebaseError, setfirebaseError] = useState("");

  const navigate = useNavigate();

//login
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event)
    const data = new FormData(event.currentTarget);
    var em = data.get("email");
    var pp = data.get("password");
    setemail(em);
    setpassword(pp);
    logIn();
  };

  //login details verification
  function logIn() {
    if (email === "") {
      setemailError("email can't be empty");
      alert(email);
      return;
    }
    if (password === "") {
      setpasswordError("password can't be empty");
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
      })
      .catch((err) => setfirebaseError(err.message));
  }

//Layout for login page
  return (
    <>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://images.unsplash.com/photo-1630342654882-aed9e2e86f24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e)=>setemail(e.target.value)}
                error={emailError !== ""}
                helperText={emailError}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={(e)=>setpassword(e.target.value)}
                error={passwordError !== ""}
                helperText={passwordError}
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="signUp" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Dialog open={firebaseError !== ""}>
        <DialogTitle>Error</DialogTitle>
        <DialogContent>
          <Typography>{firebaseError}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setfirebaseError("")}>Okay</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
