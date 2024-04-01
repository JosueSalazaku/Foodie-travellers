import { useContext } from "react";
import { Link } from "react-router-dom";
import Avatar from "react-avatar"; // Import the Avatar component
import { AuthContext } from "../Context/authContext";

function Header() {
  const { currentUser, logout } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout error:", error);
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
              {/* Display user's custom avatar if available, otherwise display a random avatar */}
              {currentUser.avatar ? (
                <Avatar src={currentUser.avatar} size="40" round />
              ) : (
                <Avatar name={currentUser.username} size="40" round />
              )}
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
