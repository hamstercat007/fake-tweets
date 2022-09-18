import './App.css';
import NavBar from './Components/NavBar';
import TweetCardList from './Components/TweetCardList';
import TweetCard from './Components/TweetCard';
import { tweetData } from './data/tweetData';
import { useState } from 'react';

function App() {
    const [currentId, setCurrentId] = useState(5);
    const [list, setList] = useState(
        tweetData.map((tweet) => {
            return (
                <TweetCard
                    key={tweet.id}
                    userName={tweet.userName}
                    timeStamp={tweet.timeStamp}
                    comments={tweet.comments}
                    content={tweet.content}
                />
            );
        })
    );
    console.log(list.length);

    return (
        <div className='App'>
            <NavBar setList={setList} listLength={list.length} />
            <TweetCardList list={list} />
        </div>
    );
}

export default App;
