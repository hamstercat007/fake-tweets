import CommentCard from './CommentCard';
import NewCommentButton from './NewCommentButton';

export default function TweetCard({ userName, timeStamp, comments, content }) {
    return (
        <div style={{ backgroundColor: 'lightblue', width: '50%' }}>
            <h2>{userName}</h2>
            <p>{content}</p>
            <p>{timeStamp}</p>
            {comments ? <CommentCard comments={comments} /> : null}
            <NewCommentButton />
        </div>
    );
}
