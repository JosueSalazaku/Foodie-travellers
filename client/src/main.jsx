import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Explore from './Pages/Explore';
import './App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/Explore" element={<Explore />} />
        <Route path="/SignUp" element={<SignIn />} />
         <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
