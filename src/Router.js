

import { Switch, Route, Redirect } from "react-router-dom";
import { useContext, useState } from "react";

import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
// import AuthContext from "./components/Store/Auth-context";
import { useSelector } from "react-redux";
import { AuthSliceAction } from "./Redux-store/AuthSlice";


import UserProfileForm from "./components/Users-Details/UserProfileForm";
import UserWelcome from "./components/Users-Details/Userwelcome";






const Router = ()=>{

  const isLoggedIn  = useSelector(state =>{
      return state.Auth.isLoggedIn
  })
    
  //  const authCtx = useContext(AuthContext);

   const[isShown, setShown]= useState(true)
   const HideHandler = props=>{
    setShown(false)
   }
  return (
    <div>
      <Layout>
        <Switch>
          {!isLoggedIn && (
            <Route path="/auth">
              <AuthPage />
            </Route>
          )}

          <Route path="/profile">
            {isLoggedIn && <UserProfile />}
            {!isLoggedIn && <Redirect to="/auth" />}
            {isLoggedIn && <Redirect to="profile" />}
          </Route>

          <Route path="/form">
            {isLoggedIn && isShown && <UserProfileForm hide={HideHandler} />}
            {!isLoggedIn && <Redirect to="/auth" />}
          </Route>

          {isLoggedIn && (
            <Route path="/">
              <UserWelcome />
            </Route>
          )}

          <Route path="/*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Layout>

      {isLoggedIn && <HomePage />}
    </div>
  );
}
export default Router;