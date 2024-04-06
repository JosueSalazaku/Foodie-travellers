import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/authContext.jsx";
import DropDownMenu from "./DropDownMenu";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { useDarkMode } from "../Context/DarkModeContext.jsx";
import { IoNotifications } from "react-icons/io5";

function Header() {
  const { currentUser, logout } = useContext(AuthContext);
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={`${darkMode && "dark"}`}>
      <nav className="w-full px-20 h-20 flex flex-row justify-between items-center font-semibold dark:bg-black dark:text-white">
        <Link className="font-extrabold dark:text-white" to="/Home">
          FOODIE TRAVELLERS
        </Link>
        <div className="flex gap-10">
          {currentUser && (
            <>
              <Link to="/Explore">Explore</Link>
              <Link to="/Write">Write</Link>
            </>
          )}
        </div>

        <div className="flex flex-row items-center gap-5">
          <button onClick={toggleDarkMode}>
            {darkMode ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
          </button>

          {currentUser ? (
            <>
              <button>
                <Link to="/Notifications"><IoNotifications /></Link>
              </button>
              <DropDownMenu currentUser={currentUser} logout={logout} />
            </>
          ) : (
            <>
              <Link to="/LogIn">Log In</Link>
              <Link
                to="/SignUp"
                className="border border-slate-800 p-2 rounded-xl hover:bg-slate-800 hover:text-white dark:text-white"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Header;
