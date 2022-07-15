import React, { Component } from "react";
import { Grid } from "@mui/material";
import axios from "axios";

import Chat from '../components/Chats'

export class home extends Component {
  state = {
    chats: null,
  };
  componentDidMount() {
    axios
      .get("/chats")
      .then((res) => {
        console.log(res.data);
        this.setState({
          chats: res.data,
        });
      })
      .catch((err) => console.log(err));
  }
  render() {
    let recentChatsMarkup = this.state.chats ? (
      this.state.chats.map((chat) => <Chat chat={chat} />)
    ) : (
      <p>Please sign in to view this...</p>
    );
    return (
      <Grid container spacing={16}>
        <Grid item sm={8} xs={12}>
          {recentChatsMarkup}
        </Grid>
        <Grid item sm={4} xs={12}>
          <p>Profile</p>
        </Grid>
      </Grid>
    );
  }
}

export default home;
