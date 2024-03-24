import { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

    const login = async (inputs) => {
       const res = await axios.post("http://localhost:3000/api/logIn", inputs);
        setCurrentUser(res.data);
    }

    const logout = async (inputs) => {
        await axios.post("http://localhost:3000/api/logOut", inputs);
         setCurrentUser(null);
     }
 

}
