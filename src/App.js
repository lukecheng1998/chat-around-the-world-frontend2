import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material";

import Navbar from "./components/Navbar";

import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Chats from "./pages/chats";

const theme = createTheme({
  palette: {
    primary: {
      light: "#33c9dc",
      main: "#00bcd4",
      dark: "#008394",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff6333",
      main: "#ff3d00",
      dark: "#b22a00",
      contrastText: "#fff",
    },
  },
  typography: {
    useNextVariants: true
  }
});

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Router>
            <Navbar />
            <div className="container">
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/signup" element={<Signup />} />
                <Route exact path="/chats" element={<Chats />} />
              </Routes>
            </div>
          </Router>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
