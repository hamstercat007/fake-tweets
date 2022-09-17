import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { useState } from 'react';

function CommentModal() {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');

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

    function updateName(e) {
        setName(e.target.value);
        console.log('name:', e.target.value);
    }

    return (
        <div>
            <Button variant='outlined' onClick={handleClickOpen}>
                ✍️
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                    <DialogContentText>Enter Comment</DialogContentText>
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
                        label='comment'
                        type='string'
                        fullWidth
                        variant='standard'
                        onChange={(e) => setComment(e.target.value)}
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

export default CommentModal;
