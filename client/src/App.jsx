import { HashRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AuthContextProvider from "./Context/authContext.jsx";
import Profile from "./Pages/Profile";
import Write from "./Pages/Write";
import Library from "./Pages/Library";
import Settings from "./Pages/Settings";
import Home from "./Pages/Home";
import LogIn from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";
import Explore from "./Pages/Explore";
import LogOut from "./Pages/LogOut";
import Notifications from "./Pages/Notifications.jsx";
import { useState } from "react";




function App() {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };


  return (
      <Router>
        <AuthContextProvider>
        <main className={darkMode ? "h-screen bg-black bg-top bg-cover bg-no-repeat border-black text-white transition-all duration-500" : "h-screen bg-white bg-top bg-cover bg-no-repeat text-gray-900 transition-all duration-500"}>
            <Header  darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Routes>
              <Route path="/Home" element={<Home />} />
              <Route path="/Explore" element={<Explore />} />
              <Route path="/Write" element={<Write />} />
              <Route path="/LogIn" element={<LogIn />} />
              <Route path="/Library" element={<Library />} />
              <Route path="/Settings" element={<Settings />} />
              <Route path="/Notifications" element={<Notifications/>} />
              <Route path="/SignUp" element={<SignUp />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/LogOut" element={<LogOut />} />
            </Routes>
          </main>
        </AuthContextProvider>
        <Footer />
      </Router>
  );
}

export default App;
