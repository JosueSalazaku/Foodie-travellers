import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null
  );

  const login = async (inputs) => {
    try {
      const res = await axios.post('http://localhost:3000/api/logIn', inputs);
      setCurrentUser(res.data);
    } catch (error) {
      console.error('Login error:', error);
      // Handle login error (show error message, etc.)
    }
  };

  const logout = async () => {
    try {
      // Remove any circular references from the currentUser object
      const { __reactFiber$2468vcm4mx8, ...inputs } = currentUser || {};
      await axios.post('http://localhost:3000/api/logOut', inputs);
      setCurrentUser(null);
      localStorage.removeItem('user'); // Clear user data from localStorage
    } catch (error) {
      console.error('Logout error:', error);
      // Handle logout error (show error message, etc.)
    }
  };

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
