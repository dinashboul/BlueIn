import React, { createContext, useContext, useState } from 'react';

const LoginContext = createContext();

export function useLogin(){
  return useContext(LoginContext);
}

export function LoginProvider({ children }) {
    const [dataContext,setDataContext]=useState(JSON.parse(localStorage.getItem('email')) || null)
    const[adminContext,setAdminCotext]=useState(JSON.parse(localStorage.getItem('admin')) || null);

    const emailContext = (email) => {
        const dataContext1 = { email };
        console.log("hello email",email)
        localStorage.setItem('email', JSON.stringify(dataContext1));
        setDataContext(dataContext1);
      };

    const removeEmail=()=>{
        localStorage.removeItem('email')
        setDataContext(null)
    }
    
   const adminPages= (adminCase)=>{
    localStorage.setItem('admin' , JSON.stringify(adminCase))
    setAdminCotext(adminCase)

   }

   const removeAdmin=()=>{
    localStorage.removeItem('admin')
    setAdminCotext(null)
   }
    return (
      <LoginContext.Provider value={{dataContext,emailContext,removeEmail,adminContext,adminPages,removeAdmin}}>
        {children}
      </LoginContext.Provider>
    );
  }
  