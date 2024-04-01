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
    <header className="w-screen h-20 flex flex-row px-10">
      <ul className="w-screen h-20 flex flex-row justify-between items-center font-extrabold">
        <li>
          <Link to="/">FOODIE TRAVELLERS</Link>
        </li>
        <li>
        <div className="flex flex-row gap-10 justify-around items-center h-20">
          <Link to="/Explore">Explore</Link>
            <Link to="/Write">Write</Link>
          </div>
    
        </li>
     
        <div className="flex flex-row gap-10 justify-around items-center h-20">
          {currentUser ? (
            <>
              <span>{currentUser.username}</span>
              <li>
                <Link to="/LogOut" onClick={handleLogout}>
                  Log Out
                </Link>
              </li>

              {currentUser.avatar ? (
                <Avatar src={currentUser.avatar} size="40" round  />
              ) : (
                <Avatar name={currentUser.username} size="40" round className="item-center" />
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
