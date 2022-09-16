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
            {/* Map array of objects and creating element per object */}
            <TweetCard />
        </div>
    );
}

export default TweetCardList;
