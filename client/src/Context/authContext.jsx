import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null
  );

  const login = async (inputs) => {
    try {
      const result = await axios.get("http://localhost:3000/api/test");
      console.log(result);
      const res = await axios.post('http://localhost:3000/api/logIn', inputs);
      setCurrentUser(res.data);
    } catch (error) {
      console.error('Login error:', error);

    }
  };

  const logout = async () => {
    try {
 
      // const { __reactFiber$2468vcm4mx8, ...inputs } = currentUser || {};
      // await axios.post('http://localhost:3000/api/logOut', inputs);
      console.log("paard")
      setCurrentUser(null);
      localStorage.removeItem('user'); // Clear user data from localStorage
    } catch (error) {
      console.error('Logout error:', error);
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
