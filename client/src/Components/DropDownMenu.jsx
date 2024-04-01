import { useState } from "react";
import Avatar from "react-avatar"; // Import the Avatar component
import { AuthContext } from "../Context/authContext";

function DropDownMenu({ currentUser, logout }) {
    const [isOpen, setIsOpen] = useState(false);


  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center text-sm pe-1 font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:me-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white dropbtn"
        type="button"
      >
        {currentUser && (
          <>
            <span>{currentUser.username}</span>
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
      {isOpen && (
        <div className="absolute top-full mt-1 bg-white divide-y divide-gray-100 rounded-lg shadow-md w-44 dark:bg-gray-700 dark:divide-gray-600">
          <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div className="font-medium">User Menu</div>
            <div className="truncate">{currentUser.email}</div>
          </div>
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownAvatarNameButton">
            <li>
              <a href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Dashboard
              </a>
            </li>
            <li>
              <button onClick={handleLogout} className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Log Out
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropDownMenu;
