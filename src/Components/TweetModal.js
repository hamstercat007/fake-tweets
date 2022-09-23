//copied from https://mui.com/material-ui/react-dialog/

import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {useState} from "react"

export default function TweetModal() {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState("")
  const [tweet, setTweet] = useState("")

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function updateName(e) {
    setName(e.target.value)
    console.log("name:", e.target.value)
    console.log(getDate())
  }
  console.log("tweet:", tweet)

  function getDate() {
    let today = new Date();
    let newDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + " " + today.getHours() + ":" + today.getMinutes();
    console.log(newDate)
    return newDate
  }

   async function onSubmit() {
    await fetch('https://localhost:3001/',
        {method: 'POST',
        mode: 'cors',
        body: JSON.stringify({user: name, timestamp: getDate(), textContent: tweet, comments: []})
      })
    handleClose()
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Create New Tweet
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Tweet</DialogTitle>
        <DialogContent>
          <DialogContentText>
           Create your Tweet
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="name"
            type="string"
            fullWidth
            variant="standard"
            onChange={updateName}
          />
            <TextField
            autoFocus
            margin="dense"
            id="tweet"
            label="tweet"
            type="string"
            fullWidth
            variant="standard"
            onChange={(e) => setTweet(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => {handleClose(); onSubmit()}}>Post</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
