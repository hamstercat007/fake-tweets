import TweetModal from "./TweetModal.js";

function HomePage() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h1>Welcome to Fake Tweets</h1>
            {/* <button style={{ alignSelf: 'flex-start' }} onClick=>
                Create new Tweet
            </button> */}
            <TweetModal sx={{ alignSelf: 'flex-start' }} />
        </div>
    );
}

export default HomePage;
