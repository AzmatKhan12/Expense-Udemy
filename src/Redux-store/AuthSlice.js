import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

const initialToken = localStorage.getItem('token');
const initialEmail = localStorage.getItem('email');
 
const init = {
  token: initialToken,
  email: initialEmail,
  isLoggedIn: false,
  
};

const AuthSlice = createSlice({
   name : 'Authentication',
   initialState: init,
   reducers: {
      login(state,action){
       
        state.token = action.payload.token;
        state.email = action.payload.email;
        state.isLoggedIn= true;
        localStorage.setItem('token',state.token);
        localStorage.setItem('email',state.email);

        
      },
      logout(state){
        state.token = null;
        state.isLoggedIn = false ;
        localStorage.removeItem('token')
        localStorage.removeItem('email')
      },

   }
})

export const  AuthSliceAction = AuthSlice.actions;
export default AuthSlice.reducer;