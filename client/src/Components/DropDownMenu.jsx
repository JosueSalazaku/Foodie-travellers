import { useState, useEffect, useRef } from "react";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";

function DropDownMenu({ currentUser, logout }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.body.addEventListener("click", handleOutsideClick);

    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex justify-end w-44 items-center gap-5 text-sm pe-1 font-medium text-gray-900 rounded-full"
        type="button"
      >
        {currentUser && (
          <>
            <span className="font-bold dark:text-white">{currentUser.username}</span>
            {currentUser.avatar ? (
              <Avatar src={currentUser.avatar} size="40" round />
            ) : (
              <Avatar
                name={currentUser.username}
                size="40"
                round
                className="item-center"
              />
            )}
          </>
        )}
      </button>
      <div
        className={`absolute right-0 w-52 divide-y divide-gray-100 object-left rounded-lg shadow-md bg-blue-400 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        {isOpen && (
          <>
            <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
              <div className="font-medium"></div>
              <div className="truncate">{currentUser.email}</div>
            </div>
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownAvatarNameButton"
            >
              <li>
                <Link
                  to="/Profile"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/Library"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Library
                </Link>
              </li>
              <li>
                <Link
                  to="/Settings"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Settings
                </Link>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Log Out
                </button>
              </li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default DropDownMenu;
