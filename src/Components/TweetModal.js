import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import TweetCard from './TweetCard';

export default function TweetModal({ setList, listLength }) {
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
    };

    const handleSubmit = () => {
        if (name && tweet) {
            setOpen(false);
            setList((prev) => [
                <TweetCard
                    key={listLength + 1}
                    id={listLength + 1}
                    userName={name}
                    timeStamp={newDate}
                    content={tweet}
                />,
                ...prev,
            ]);
            setName('');
            setTweet('');
        }
    };
    console.log(name, tweet);

    return (
        <div>
            <Button variant='outlined' onClick={handleClickOpen}>
                Create New Post
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>New Post</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin='dense'
                        id='name'
                        label='name'
                        type='string'
                        fullWidth
                        variant='standard'
                        required
                        onChange={(e) => {
                            console.log('this is target value', e.target.value);
                            setName(e.target.value);
                        }}
                    />
                    <TextField
                        autoFocus
                        margin='dense'
                        id='tweet'
                        label='tweet'
                        type='string'
                        fullWidth
                        variant='standard'
                        required
                        onChange={(e) => setTweet(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>Post</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
