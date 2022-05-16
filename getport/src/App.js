import logo from './logo.svg';
import Header from './components/Header';
import Profile from './components/Profile';
import {BrowserRouter,Route,Routes}from 'react-router-dom'
import './App.css';




function App() {
  return (
    <div className="App">
            <Header />

      <BrowserRouter>
      <Routes>
        <Route path = '/' element={<Profile userName='Tduncan14 ' />}/>
       </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
