/** @format */

import "./ExpenseItem.css";
import './ExpenseDate.js';
import ExpenseDate from "./ExpenseDate";
import ExpenseTitle from "./ExpenseTitle";
import ExpenseAmount from "./ExpenseAmount";

function ExpenseItem (props) {
 
  return (
    <div className="Expense-item">
          <ExpenseDate  date ={props.date}/>
       <div className="title-location">
          <ExpenseTitle title ={props.title} location = {props.location}/>
       </div>

        <div className="Expense-item_description">
          <ExpenseAmount  amount ={props.amount}/> 
        </div>
    </div>
  );
}

export default ExpenseItem;
