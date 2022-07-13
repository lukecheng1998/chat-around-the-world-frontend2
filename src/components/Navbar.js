import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//MUI Stuff
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

export class Navbar extends Component {
  render() {
    return (
      <AppBar>
        <Toolbar className="nav-container">
            <Button color = "inherit" component={Link} to="/login">Login</Button>
            <Button color = "inherit" component={Link} to="/">Home</Button>
            <Button color = "inherit" component={Link} to="/signup">Signup</Button>
            <Button color = "inherit" component={Link} to="/chats">Chats</Button>
        </Toolbar>
      </AppBar>
    )
  }
}

export default Navbar