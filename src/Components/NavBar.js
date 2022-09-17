import TweetModal from './TweetModal.js';

function NavBar({ setList }) {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            id='flex-container'
        >
            <h1>Welcome to Fake Tweets</h1>
            <div
                style={{ textAlign: 'left', width: '50%' }}
                id='tweet-modal-div'
            >
                <TweetModal setList={setList} />
            </div>
        </div>
    );
}

export default NavBar;
