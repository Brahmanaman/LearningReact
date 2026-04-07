import React, { createContext, useContext, useState } from "react";

const Auth = createContext();

export const AuthContext = ({ children }) => {
  let [registerUser, setRegisterUser] = useState(JSON.parse(localStorage.getItem("registeredUser")) || []);
  let [loggedInUser, setLoggedInUser] = useState(null);
  return (
    <>
      <Auth.Provider value={{ setRegisterUser, setLoggedInUser, registerUser, loggedInUser }}>{children}</Auth.Provider>
    </>
  );
};

export const useAuth = () => useContext(Auth);
