import React from "react";
import HeaderPage from "./HeaderPage";

const UserWelcome = props =>{
    return (
      <HeaderPage
        heading={"Welcome To Expense Tracker!!"}
        title={"Your profile is Incomplete."}
        link={"/form"}
        linkTitle={"Complete Now"}
      />
    
    );

}

export default UserWelcome;