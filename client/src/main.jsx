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

const root = ReactDOM.createRoot(document.getElementById('root')); // Use createRoot
root.render( // Render using root
  <React.StrictMode>
    <Router>
      <AuthContextProvider>
        <Header /> {/* Render Header outside Routes for consistent access */}
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route path="/Explore" element={<Explore />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/LogOut" element={<LogOut />} />
        </Routes>
      </AuthContextProvider>
      <Footer />
    </Router>
  </React.StrictMode>
);
