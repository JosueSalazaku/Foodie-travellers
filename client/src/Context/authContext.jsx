// authContext.jsx
import  { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  ); // Initial state for clarity

  const login = async (inputs) => {
    try {
      const res = await axios.post("http://localhost:3000/api/logIn", inputs);
      setCurrentUser(res.data);
    } catch (error) {
      console.error("Login error:", error);
      // Add logic to show an error message to the user (optional)
    }
  };

  const logout = async (inputs) => {
    try {
      await axios.post("http://localhost:3000/api/logOut", inputs);
      setCurrentUser(null);
    } catch (error) {
      console.error("Logout error:", error);
      // Handle logout error (optional)
    }
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
