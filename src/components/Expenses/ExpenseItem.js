/** @format */
import React  from  "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseTitle from "./ExpenseTitle";
import ExpenseAmount from "./ExpenseAmount";
import { Button } from "react-bootstrap";


const ExpenseItem = (props) => {
  // <ExpenseDate date={props.date} />;
 
  const editClick = () => {console.log('editClicked')};
  return (
    <div className="Expense-item">
      <ExpenseDate date={new Date(props.date)} /> 
      <ExpenseTitle title={props.title} />
      <ExpenseAmount amount={props.amount} />

      <Button onClick={props.edit}>Edit</Button>
      <Button onClick={props.delete}>delete</Button>
    </div>
  );
}

export default ExpenseItem;
