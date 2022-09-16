import TweetCard from "./tweetCard"
export default function TweetCardList() {
    const tweetData = [];
    // fetch this from database
    return(<section>{
        tweetData.map((tweet) => {
            return(<TweetCard key={tweet.id} userName={tweet.userName} timeStamp={tweet.timeStamp} comments={tweet.commentArray} content={tweet.content}/>)
        })
    }
    </section>)
}