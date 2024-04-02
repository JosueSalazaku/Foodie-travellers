import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/authContext";
import DropDownMenu from "./DropDownMenu";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

function Header() {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <header className="w-full px-16 h-20 flex flex-row justify-between items-center font-semibold">
      <Link to="/">FOODIE TRAVELLERS</Link>
      <div className="flex gap-10">
        <Link to="/Explore">Explore</Link>
        <Link to="/Write">Write</Link>
      </div>

      <div className="flex flex-row items-center">
        <MdOutlineLightMode />
        <MdOutlineDarkMode />
        
        {currentUser ? (
          <DropDownMenu currentUser={currentUser} logout={logout} />
        ) : (
          <>
            <Link to="/LogIn">Log In</Link>
            <Link to="/SignUp" className="border border-slate-800 p-2 rounded-xl hover:bg-slate-800 hover:text-white">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
