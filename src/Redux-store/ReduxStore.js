import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./AuthSlice";

const ReduxStore = configureStore({
    reducer:{
        Auth : AuthReducer,
    }
})

export default ReduxStore;