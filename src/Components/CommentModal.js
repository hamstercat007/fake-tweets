import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { useState } from 'react';

function CommentModal({ id, setCommentList }) {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');

    const handleClickOpen = (e) => {
        setOpen(true);
        console.log(e.target);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        setOpen(false);
        setCommentList((prev) => [name, comment, ...prev]);
    };

    return (
        <div>
            <Button variant='outlined' onClick={handleClickOpen}>
                ✍️
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                    <DialogContentText>
                        {id + 'Enter Comment'}
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin='dense'
                        id='name'
                        label='name'
                        type='string'
                        fullWidth
                        variant='standard'
                        onChange={(e) => setName(e.target.value)}
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
                    <Button onClick={handleSubmit}>Post</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default CommentModal;
