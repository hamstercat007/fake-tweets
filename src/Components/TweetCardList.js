import TweetCard from './TweetCard.js';
import {tweetData} from "../tweetData.js"

function TweetCardList() {
    return (
      <div
        style={{
          backgroundColor: "lightgreen",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        TweetCardList
        {/* Map array of objects and creating element per object */}
        {tweetData.map((tweet) => {
          return (
            <TweetCard
              key={tweet.id}
              userName={tweet.userName}
              timeStamp={tweet.timeStamp}
              comments={tweet.comments}
              content={tweet.content}
            />
          );
        })}
        <TweetCard />
      </div>
    );
}

export default TweetCardList;
