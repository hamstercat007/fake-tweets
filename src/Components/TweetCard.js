import CommentCard from './CommentCard';
import NewCommentButton from './NewCommentButton';

export default function TweetCard({ userName, timeStamp, comments, content }) {
    return (
        <div style={{ backgroundColor: 'lightblue', width: '50%' }}>
            Tweet Card
            <h2>{userName} username here</h2>
            <p>{content} content here</p>
            <p>{timeStamp} timestamp here</p>
            {comments ? <CommentCard comments={comments} /> : null}
            <NewCommentButton />
        </div>
    );
}
