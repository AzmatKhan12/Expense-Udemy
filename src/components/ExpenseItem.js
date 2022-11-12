/** @format */
import React ,{useState} from  "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseTitle from "./ExpenseTitle";
import ExpenseAmount from "./ExpenseAmount";

const ExpenseItem = (props) => {

  const [title,setItem]= useState(props.title)
   
  let clickHandlar = ()=>{
     setItem('updates')
  }
 
  return (
    <div className="Expense-item">
      <ExpenseDate  date ={props.date}/>
       
      <ExpenseTitle 
        title ={title} 
        location = {props.location}/>
       
     <ExpenseAmount  amount ={props.amount}/>
     
     <button onClick={clickHandlar}>Delete-Expense</button>
   
    </div>
  );
}

export default ExpenseItem;
