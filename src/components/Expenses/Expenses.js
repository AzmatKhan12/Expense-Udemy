/** @format */

import React from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

const Expenses = ({ item }) => {
  // console.log(props, "props in data");
  return (
    <div className="Expenses">
    {
      item.map((val,key)=>{
        return (
          <ExpenseItem
           
            date={val.date}
            title={val.expeseTitle}
            amount={val.expeseAmount}
        
          ></ExpenseItem>
        );
      })
    }
    
    </div>
  );
};

export default Expenses;
