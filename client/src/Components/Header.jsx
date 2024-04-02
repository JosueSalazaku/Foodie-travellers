import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/authContext";
import DropDownMenu from "./DropDownMenu";

function Header() {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <header className="w-full px-16 h-20 flex flex-row justify-between font-semibold">
      <ul className="w-full h-20 flex flex-row space-x-24 justify-between items-center bg-none">
        <li>
          <Link to="/">FOODIE TRAVELLERS</Link>
        </li>
        <li>
          <div className="flex gap-10">
            <Link to="/Explore">Explore</Link>
            <Link to="/Write">Write</Link>
          </div>
        </li>
        <li>
          {currentUser ? (
            <DropDownMenu currentUser={currentUser} logout={logout} />
          ) : (
            <div className="flex flex-row gap-10 justify-around items-center h-20">
              <li>
                <Link to="/LogIn">Log In</Link>
              </li>
              <li className="border border-slate-800 p-2 rounded-xl hover:bg-slate-800 hover:text-white">
                <Link to="/SignUp">Sign Up</Link>
              </li>
            </div>
          )}
        </li>
      </ul>
    </header>
  );
}

export default Header;
