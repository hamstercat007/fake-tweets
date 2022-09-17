import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import TweetCard from './TweetCard';

export default function TweetModal({ setList }) {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [tweet, setTweet] = useState('');

    let today = new Date();
    let newDate =
        today.getFullYear() +
        '-' +
        (today.getMonth() + 1) +
        '-' +
        today.getDate() +
        ' ' +
        today.getHours() +
        ':' +
        today.getMinutes();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setList((prev) => [
            <TweetCard
                key={tweet.id}
                userName={name}
                timeStamp={newDate}
                comments={null}
                content={tweet}
            />,
            ...prev,
        ]);
    };

    function updateName(e) {
        setName(e.target.value);
        console.log('name:', e.target.value);
    }

    return (
        <div>
            <Button variant='outlined' onClick={handleClickOpen}>
                Create New Tweet
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Tweet</DialogTitle>
                <DialogContent>
                    <DialogContentText>Create your Tweet</DialogContentText>
                    <TextField
                        autoFocus
                        margin='dense'
                        id='name'
                        label='name'
                        type='string'
                        fullWidth
                        variant='standard'
                        onChange={updateName}
                    />
                    <TextField
                        autoFocus
                        margin='dense'
                        id='tweet'
                        label='tweet'
                        type='string'
                        fullWidth
                        variant='standard'
                        onChange={(e) => setTweet(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Post</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
