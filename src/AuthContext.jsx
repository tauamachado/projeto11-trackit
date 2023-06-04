import React, { createContext, useState } from "react";

export const AuthContext = createContext()

function AuthProvider({children}) {
  const [habitsToday, setHabitsToday] = useState([])
  return (
    <AuthContext.Provider value={{habitsToday, setHabitsToday}}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider
