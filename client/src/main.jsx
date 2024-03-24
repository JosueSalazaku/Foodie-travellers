import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import LogIn from './Pages/LogIn';
import SignUp from './Pages/SignUp';
import Explore from './Pages/Explore';
import LogOut from './Pages/LogOut';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header /> {/* Render the Header component outside the Routes */}
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/Explore" element={<Explore />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/LogOut" element={<LogOut />} />
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>
);
