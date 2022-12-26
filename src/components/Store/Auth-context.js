import React, { useState } from "react";
const AuthContext = React.createContext({
  token : '',
  email: "",
  isLoggedIn : false,
  login : (token)=>{},
  logout : ()=>{}
})

export const AuthContextProvider= (props)=>{

    const storedToken = localStorage.getItem("token");
    const storedEmail = localStorage.getItem("email");
    const [token, setToken]= useState(storedToken)
    const [isEmail, setIsEmail]=useState(storedEmail)
    

    const userIsLoggedIn = !!token // to convert it in boolean value it toggle as true & false 
    const loginHandler = (token,email)=>{
       setToken(token)
       localStorage.setItem('token',token)
       localStorage.setItem("email", email)
       setIsEmail(email)
    }

    const logoutHandler =()=>{
        localStorage.removeItem('token')
        setToken(null) // to clear the token after logout
        setIsEmail(null)
    }
    
    const contextValue = {
      token: token,
      email: isEmail,
      isLoggedIn: userIsLoggedIn,
      login: loginHandler,
      logout: logoutHandler,
    };
    return (
      <AuthContext.Provider value={contextValue}>
        {props.children}
      </AuthContext.Provider>
    );
      
   
}
export default AuthContext;