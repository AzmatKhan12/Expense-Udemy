/** @format */
import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseTitle from "./ExpenseTitle";
import ExpenseAmount from "./ExpenseAmount";

const ExpenseItem = (props) => {
   
  let clickHandlar = ()=>{
    console.log('clicked')
  }
 
  return (
    <div className="Expense-item">
      <ExpenseDate  date ={props.date}/>
       
      <ExpenseTitle 
        title ={props.title} 
        location = {props.location}/>
       
     <ExpenseAmount  amount ={props.amount}/>
     
     <button onClick={clickHandlar}>Delete-Expense</button>
   
    </div>
  );
}

export default ExpenseItem;
