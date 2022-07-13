import React, { Component } from "react";
import { Typography, TextField, Button } from "@mui/material";
import { withStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loginUser } from "../components/redux/actions/userActions";

const styles = (theme) => ({
  ...theme.spreadThis,
});

export class login extends Component {
  render() {
    return <h1>Login</h1>;
  }
}
login.propTypes = {
  classes: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI,
});
const mapActionsToProps = {
  loginUser,
};

export default login;
