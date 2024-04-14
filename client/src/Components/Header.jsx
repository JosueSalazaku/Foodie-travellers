import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/authContext.jsx";
import DropDownMenu from "./DropDownMenu";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";

// eslint-disable-next-line react/prop-types
function Header({ darkMode, toggleDarkMode }) {
  const { currentUser, logout } = useContext(AuthContext);
  // console.log(currentUser)

  return (

      <nav className="w-full px-20 h-32 flex flex-row justify-between items-center font-semibold dark:bg-black dark:text-white">
        <Link className="font-extrabold text-2xl dark:text-white" to="/Home">
          FOODIE <br /> TRAVELLERS
        </Link>
        <div className="flex gap-10 text-xl">
          {currentUser && (
            <>
              <Link to="/Explore">Explore</Link>
              <Link to="/Write">Write</Link>
            </>
          )}
        </div>

        <div className="flex flex-row items-center gap-5 text-xl">
          <button className="px-2 transition duration-150" onClick={toggleDarkMode}>
            {darkMode ? <MdOutlineLightMode style={{ fontSize: "20px" }}  /> : <MdOutlineDarkMode style={{ fontSize: "20px" }}  />}
          </button>

          {currentUser ? (
            <>
              <button>
                <Link to="/Notifications"><IoNotificationsOutline style={{ fontSize: "20px" }}  /></Link>
              </button>
              <DropDownMenu className="dark:text-white" currentUser={currentUser} logout={logout} />
            </>
          ) : (
            <>
              <Link to="/LogIn">Log In</Link>
              <Link
                to="/SignUp"
                className="bg-blue-400 py-2 px-4 rounded-xl hover:bg-slate-800 hover:text-white dark:text-white"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav>
  );
}

export default Header;
