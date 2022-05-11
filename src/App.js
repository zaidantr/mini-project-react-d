import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router, Routes, Link} from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Error from './components/Error';
import Pomodoro from './components/Pomodoro';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/pomodoro" element={<Pomodoro/>}/>
        <Route path="/error" element={<Error/>}/>
      </Routes>
    </Router>
  );
}

export default App;
