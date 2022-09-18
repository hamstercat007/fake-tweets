import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import { useState } from 'react';
import CommentModal from './CommentModal';

export default function CommentCard({ id }) {
    const [openComment, setOpenComment] = useState(false);
    const [commentList, setCommentList] = useState('loads of comments');

    const handleClick = () => {
        setOpenComment(!openComment);
    };

    return (
        <div>
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
                    <ListItemText primary={commentList} />
                    {openComment ? '-' : '+'}
                </ListItemButton>
                <Collapse in={openComment} timeout='auto' unmountOnExit>
                    <List component='div' disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <CommentModal
                                id={id}
                                setCommentList={setCommentList}
                            />
                            <ListItemText primary={id + 'Write a comment'} />
                        </ListItemButton>
                    </List>
                </Collapse>
            </List>
        </div>
    );
}
