import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import { useState } from 'react';
import CommentModal from './CommentModal';

export default function CommentCard({ name, comments }) {
    const [openComment, setOpenComment] = useState(false);

    const handleClick = () => {
        setOpenComment(!openComment);
    };

    return (
        <div>
            <div>{name}</div>
            <div>{comments}</div>

            <List
                sx={{
                    width: '100%',
                    maxWidth: 360,
                    bgcolor: 'background.paper',
                }}
                component='nav'
                aria-labelledby='nested-list-subheader'
            >
                <ListItemButton onClick={handleClick}>
                    <ListItemText primary='Comments' />
                    {openComment ? '-' : '+'}
                </ListItemButton>
                <Collapse in={openComment} timeout='auto' unmountOnExit>
                    <List component='div' disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <CommentModal />
                            <ListItemText primary='Write a comment' />
                        </ListItemButton>
                    </List>
                </Collapse>
            </List>
        </div>
    );
}
