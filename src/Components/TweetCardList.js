import TweetCard from "./tweetCard"
export default function TweetCardList() {
    const tweetData = [];
    return(<section>{
        tweetData.map((tweet) => {
            return(<TweetCard userName={tweet.userName} timeStamp={tweet.timeStamp} comments={tweet.commentArray} content={tweet.content}/>)
        })
    }
    </section>)
}