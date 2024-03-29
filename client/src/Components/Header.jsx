// Header.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router-dom for routing

import { AuthContext } from '../Context/authContext';

function Header() {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <header className="w-screen h-20 flex flex-row">
      <ul className="w-screen flex flex-row justify-around items-center font-extrabold">
        <li><Link to="/">Logo</Link></li>
        <li><Link to="/Explore">Explore</Link></li>
        <div className="flex flex-row gap-5">
          {currentUser?.username && <span>{currentUser?.username}</span>}  {/* Only display username if currentUser exists */}
          {!currentUser && <li><Link to="/LogIn">Log In</Link></li>}  {/* Show "Log In" if no currentUser */}
          <li><Link to="/SignUp">Sign Up</Link></li>
          <li><Link to="/LogOut">Log Out</Link></li>
        </div>
      </ul>
    </header>
  );
}

export default Header;
