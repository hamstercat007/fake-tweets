import CommentCard from './CommentCard';

export default function TweetCard({
    userName,
    timeStamp,
    comments,
    content,
    id,
}) {
    return (
        <div style={{ backgroundColor: 'lightblue', width: '50%' }}>
            <p>{id}</p>
            <h2>{userName}</h2>
            <p>{content}</p>
            <p>{timeStamp}</p>
            <CommentCard comments={comments} id={id} />
        </div>
    );
}
