import { HashRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AuthContextProvider from "./Context/authContext";
import Profile from "./Pages/Profile";
import Write from "./Pages/Write";
import Library from "./Pages/Library";
import Settings from "./Pages/Settings";
import Home from "./Pages/Home";
import LogIn from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";
import Explore from "./Pages/Explore";
import LogOut from "./Pages/LogOut";

function App() {
  return (
    
    <Router>
      <AuthContextProvider>
        <main className="h-screen flex flex-col justify-start bg-top bg-no-repeat dark:bg-neutral-900">
          <Header />
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Explore" element={<Explore />} />
            <Route path="/Write" element={<Write />} />
            <Route path="/LogIn" element={<LogIn />} />
            <Route path="/Library" element={<Library />} />
            <Route path="/Settings" element={<Settings />} />
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
