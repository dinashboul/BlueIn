import React, { createContext, useContext, useState } from 'react';

const LoginContext = createContext();

export function useLogin(){
  return useContext(LoginContext);
}

export function LoginProvider({ children }) {
    const [dataContext,setDataContext]=useState(JSON.parse(localStorage.getItem('email')) || null)
    const[adminContext,setAdminCotext]=useState(JSON.parse(localStorage.getItem('admin')) || null);
    const[nameContext,setNameCotext]=useState(JSON.parse(localStorage.getItem('name')) || null);
    const[imageContext,setImageContext]=useState(localStorage.getItem('image')|| null);
    
    // ////////name context ////
    const nameFunContext = (name) => {
      console.log("hello name",name)
      localStorage.setItem('name', JSON.stringify(name));
      setNameCotext(name);
    };

    const removeName=()=>{
        localStorage.removeItem('name')
        setNameCotext(null)
    }
  
    // ///////email context////
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
    // ///////admin context////////
   const adminPages= (adminCase)=>{
    localStorage.setItem('admin' , JSON.stringify(adminCase))
    setAdminCotext(adminCase)

   }

   const removeAdmin=()=>{
    localStorage.removeItem('admin')
    setAdminCotext(null)
   }
  //  //////profile image context ///////////
   const imageProfile= (image)=>{
    localStorage.setItem('image' ,image)
    setImageContext(image)

   }

   const removeImage=()=>{
    localStorage.removeItem('image')
    setImageContext(null)
   }
    return (
      <LoginContext.Provider value={{dataContext,emailContext,removeEmail,adminContext,adminPages,removeAdmin,imageProfile,removeImage,imageContext
      ,nameContext,nameFunContext,removeName
      }}>
        {children}
      </LoginContext.Provider>
    );
  }
  