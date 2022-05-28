import React, { useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./components/authScreen/login";
import SignUp from "./components/authScreen/signUp";
import { auth } from "./services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import CircularProgress from "@mui/material/CircularProgress";
import Home from "./components/Home/home";
import ImageUrl from "./components/faceRecScreen/ImageUrl";

//it creates a theme with orange as the primary color
const theme = createTheme({
	palette: {
		primary: orange,
	}
});
//main app
function App() {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "100vh",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        {/* cicular progress bar to show loading */}
        {" "}
        <ThemeProvider theme={theme}>
          <CircularProgress />
        </ThemeProvider>
      </div>
    );
  }
  // if user is not logged in return sign in page else return app
  if (user) {
    return (
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="signUp" element={<Home user={user} />} />
          <Route path="profile" element={<ImageUrl user={user} />} />
        </Routes>
      </ThemeProvider>
    );
  } else {
    return (
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="signUp" element={<SignUp />} />
        </Routes>
      </ThemeProvider>
    );
  }
}

export default App;
