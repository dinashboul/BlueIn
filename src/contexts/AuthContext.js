import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function useAuth(){
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
  
    const loginAuth = ({token}) => {
      const user = { token };
      localStorage.setItem('user', JSON.stringify(user));
      setUser(user);
    };
  
    const logoutAuth = () => {
      localStorage.removeItem('user');
      setUser(null);
    };
  
    return (
      <AuthContext.Provider value={{ user, loginAuth, logoutAuth }}>
        {children}
      </AuthContext.Provider>
    );
  }
  