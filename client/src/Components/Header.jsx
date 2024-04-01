import React, { useContext } from "react";
import { Link } from "react-router-dom"; // Assuming you're using react-router-dom for routing

import { AuthContext } from "../Context/authContext";

function Header() {
  const { currentUser, logout } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await logout(); // Call the logout function provided by the context
    } catch (error) {
      console.error("Logout error:", error);
      // Handle logout error (show error message, etc.)
    }
  };

  return (
    <header className="w-screen h-20 flex flex-row">
      <ul className="w-screen flex flex-row justify-around items-center font-extrabold">
        <li>
          <Link to="/Home">Logo</Link>
        </li>
        <li>
          <Link to="/Explore">Explore</Link>
        </li>
        <div className="flex flex-row gap-5">
          {currentUser ? (
            <>
              <span>{currentUser.username}</span>
              <li>
                <Link to="/LogOut" onClick={handleLogout}>
                  Log Out
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/LogIn">Log In</Link>
              </li>
              <li>
                <Link to="/SignUp">Sign Up</Link>
              </li>
            </>
          )}
        </div>
      </ul>
    </header>
  );
}

export default Header;
