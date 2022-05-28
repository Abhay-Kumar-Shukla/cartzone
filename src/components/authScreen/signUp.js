//Signup Page

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
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
//display copyright
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Cartzone
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
//Main signup logic
export default function SignUp() {
  const [displayName, setdisplayName] = useState("");
  const [displayNameError, setdisplayNameError] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [signUpMode, setsignUpMode] = useState(false);
  const [confirmPassword, setconfirmPassword] = useState("");
  const navigate = useNavigate();


  const [firebaseError, setfirebaseError] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    var em = data.get("email");
    var pp = data.get("password");
    var nm = data.get("name");

    console.log(em, pp, nm, "name")

    console.log(email, password, displayName, "62")
    signUp();
  };

  
//signup details verification
  function signUp() {
    
    console.log(email, password, displayName, "l95")
    if (email === "") {
      setEmailError("email can't be empty");
      return;
    }
    if (password === "") {
      setpasswordError("password can't be empty");
      return;
    }
    if (displayName === "") {
      setdisplayNameError("name can't be empty");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userObj) => {
        const userData = {
          uid: userObj.user.uid,
          name: displayName,
          email: userObj.user.email,
          firstTime: true,
        };
        setDoc(doc(db, "users", userObj.user.uid), userData);
        navigate('/profile')
      })
      .catch((err) => setfirebaseError(err.message));
  }
//Signup page layout
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
            backgroundImage: "url(https://images.unsplash.com/photo-1565374392032-8007fb37c26e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)",
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
              Sign up
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
                id="name"
                label="Name"
                onChange={(e)=> setdisplayName(e.target.value)}
                name="name"
                autoComplete="name"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                onChange={(e)=> setEmail(e.target.value)}
                autoComplete="email"
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
                onChange={(e)=> setpassword(e.target.value)}
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Create Account
              </Button>
              
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
        {/* show error message if any */}
        <DialogActions>
          <Button onClick={() => setfirebaseError("")}>Okay</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
