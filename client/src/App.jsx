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
import { useState, useEffect } from "react";

function App() {
  // State to manage dark mode
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    const isDarkMode = !darkMode;
    setDarkMode(isDarkMode);

    // Update localStorage to persist dark mode preference
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    
    // Add transition effect to body to smoothly transition between light and dark mode
    document.body.classList.add('transition-colors');
    document.body.classList.toggle('dark');
    
    // Remove transition effect after a short delay
    setTimeout(() => {
      document.body.classList.remove('transition-colors');
    }, 1000);
  };

  // Effect to load dark mode preference from localStorage on component mount
  useEffect(() => {
    const storedDarkMode = JSON.parse(localStorage.getItem('darkMode'));
    if (storedDarkMode !== null) {
      setDarkMode(storedDarkMode);
    }
  }, []);

  return (
    <Router>
      <AuthContextProvider>
        <main className={darkMode ? "h-screen bg-black bg-top bg-cover bg-no-repeat text-white transition-all duration-500 border-white" : "h-screen bg-white bg-top bg-cover bg-no-repeat text-gray-900 transition-all duration-500"}>
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
