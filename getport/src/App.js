import logo from './logo.svg';
import Header from './components/Header';
import Profile from './components/Profile';
import Projects from './components/pages/Projects';
import {BrowserRouter,Route,Routes}from 'react-router-dom'
import './App.css';
import ProjectDetails from './components/pages/ProjectDetails';




function App() {
  return (
    <div className="App">
         
      <BrowserRouter>
      <Header />

      <Routes>
        <Route path = '/' element={<Profile userName='Tduncan14 ' />}/>
        <Route path='/projects' element={<Projects userName="Tduncan14" />} />
        <Route path='/projects/:name' element={<ProjectDetails userName="Tduncan14"/>}/>
       </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
