import logo from './logo.svg';
import Header from './components/Header';
import Profile from './components/Profile';
import './App.css';

const api = 'https://api.github.com/users/Tduncan14'

function App() {
  return (
    <div className="App">
      <Header />
      <Profile userName={'tduncan14'} />
    </div>
  );
}

export default App;
