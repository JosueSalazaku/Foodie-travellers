import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { DarkModeProvider } from './Context/DarkModeContext.jsx';
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

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <AuthContextProvider>
          <main className="h-screen flex flex-col justify-start bg-top bg-no-repeat dark:bg-neutral-900">
            <Header  />
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
    </DarkModeProvider>
  );
}

export default App;
