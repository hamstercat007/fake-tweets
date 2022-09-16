import logo from './logo.svg';
import './App.css';
import HomePage from './Components/HomePage';
import TweetCardList from './Components/TweetCardList';

function App() {
    return (
        <div className='App'>
            <HomePage />
            <TweetCardList />
        </div>
    );
}

export default App;
