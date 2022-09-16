import TweetCard from './TweetCard.js';
function TweetCardList() {
    return (
        <div
            style={{
                backgroundColor: 'lightgreen',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            TweetCardList
            <TweetCard />
        </div>
    );
}

export default TweetCardList;
