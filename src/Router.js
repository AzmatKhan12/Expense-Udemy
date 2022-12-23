

import { Switch, Route, Redirect } from "react-router-dom";
import { useContext, useState } from "react";

import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import AuthContext from "./components/Store/Auth-context";

import UserProfileForm from "./components/Users-Details/UserProfileForm";
import UserWelcome from "./components/Users-Details/Userwelcome";






const Router = ()=>{
    
   const authCtx = useContext(AuthContext);

   const[isShown, setShown]= useState(true)
   const HideHandler = props=>{
    setShown(false)
   }
  return (
    <div>
      <Layout>
        <Switch>
          {!authCtx.isLoggedIn && (
            <Route path="/auth">
              <AuthPage />
            </Route>
          )}

          <Route path="/profile">
            {authCtx.isLoggedIn && <UserProfile />}
            {!authCtx.isLoggedIn && <Redirect to="/auth" />}
            {authCtx.isLoggedIn && <Redirect to="profile" />}
          </Route>

          <Route path="/form">
            {authCtx.isLoggedIn && isShown && <UserProfileForm hide={HideHandler} />}
            {!authCtx.isLoggedIn && <Redirect to="/auth" />}
          </Route>

          {authCtx.isLoggedIn && (
            <Route path="/">
              <UserWelcome />
            </Route>
          )}

          <Route path="/*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Layout>

      {authCtx.isLoggedIn && <HomePage />}
    </div>
  );
}
export default Router;