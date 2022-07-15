import React, { Component } from 'react'
import {Card, CardContent, CardMedia, Typography} from '@mui/material'
import {withStyles} from '@mui/styles'
import {Link} from 'react-router-dom'
// MUI Stuff

const styles = {
    card: {
        display: 'flex',
        marginBottom: 20,
    },
    image: {
        minWidth:200
    },
    content:{
        padding: 25,
        objectFit: 'cover'
    }
}

export class Chats extends Component {
  render() {
    const { classes,chats: { body, createdAt, userImage, userHandle, chatId } } = this.props
    return (
      <Card className={classes.card}>
        <CardMedia 
        image={userImage} 
        title="Profile Image"
        className={classes.image} />
        <CardContent class={classes.content}>
            <Typography variant="h5" component={Link} to={`/users/${userHandle}`} color="primary">{userHandle}</Typography>
            <Typography variant="body2" color="textSecondary">{createdAt}</Typography>
            <Typography variant="body1">{body}</Typography>
        </CardContent>
      </Card>
    )
  }
}

export default withStyles(styles)(Chats)