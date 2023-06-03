import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [image, setImage] = useState('');
  const [token, setToken] = useState('');

  const authContextValue = {
    image,
    setImage,
    token,
    setToken
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
