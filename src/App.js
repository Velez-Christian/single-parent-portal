import React from 'react';
import './App.css';
//import { Navbar } from 'reactstrap';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/Pages/Landingpage/LandingPage';
import Jobs from './components/Pages/Jobs/Jobs';
import Profile from './components/Pages/Profile/Profile';
import Contacts from './components/Pages/Contacts/Contacts';
import About from './components/Pages/About/About';
import SignUp from './components/Pages/SignUp/SignUp';
import LogIn from './components/Pages/LogIn/LogIn';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' Component={LandingPage} />
        <Route path='/jobs' Component={Jobs} />
        <Route path='/profile' Component={Profile} />
        <Route path='/contacts' Component={Contacts} />
        <Route path='/about'  Component={About} />
        <Route path='/sign-in'  Component={SignUp} />
        <Route path='/log-in'  Component={LogIn} />
      </Routes>
    </Router>
  );
}

export default App;