export function TweetCardList({ list }) {
    return (
        <div
            style={{
                backgroundColor: 'lightgreen',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '5px',
            }}
        >
            {list}
        </div>
    );
}

export default TweetCardList;
