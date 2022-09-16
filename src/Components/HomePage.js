function HomePage() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h1>Welcome to Fake Tweets</h1>
            <button style={{ alignSelf: 'flex-start' }}>
                Create new Tweet
            </button>
        </div>
    );
}

export default HomePage;
