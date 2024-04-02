// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import createRoot from 'react-dom/client'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import LogIn from './Pages/LogIn';
import SignUp from './Pages/SignUp';
import Explore from './Pages/Explore';
import LogOut from './Pages/LogOut';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import AuthContextProvider from './Context/authContext';
import Profile from './Pages/Profile';
import Write from './Pages/Write';

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
  <React.StrictMode>
    <Router>
      <AuthContextProvider>
      <main className="h-screen flex flex-col justify-start bg-top bg-no-repeat bg-cover">
        <Header /> 
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route path="/Home" element={<App />} />
          <Route path="/Explore" element={<Explore />} />
          <Route path="/Write" element={<Write />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Profile" element={<Profile/>}/>
          <Route path="/LogOut" element={<LogOut />} />
          </Routes>
          </main>
      </AuthContextProvider>
      <Footer />
    </Router>s
  </React.StrictMode>
);
