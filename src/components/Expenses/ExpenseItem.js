/** @format */
import React ,{useState} from  "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseTitle from "./ExpenseTitle";
import ExpenseAmount from "./ExpenseAmount";

const ExpenseItem = (props) => {
 
  return (
    <div className="Expense-item">
      <ExpenseDate date={props.date} />

      <ExpenseTitle title={props.title} />

      <ExpenseAmount amount={props.amount} />
    </div>
  );
}

export default ExpenseItem;
