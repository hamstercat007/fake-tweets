import TweetModal from './TweetModal.js';

function NavBar({ setList, listLength }) {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            id='flex-container'
        >
            <h1>Welcome</h1>
            <div
                style={{ textAlign: 'left', width: '50%' }}
                id='tweet-modal-div'
            >
                <TweetModal setList={setList} listLength={listLength} />
            </div>
        </div>
    );
}

export default NavBar;
