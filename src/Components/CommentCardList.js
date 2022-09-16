import CommentCard from "./CommentCard"
export default function CommentCardList({commentData}) {
    //const tweetData = [];
    return(<section>{
        commentData.map((comment) => {
            return(<CommentCard key={comment.id} userName={comment.userName} timeStamp={comment.timeStamp} content={comment.content}/>)
        })
    }
    </section>)
}