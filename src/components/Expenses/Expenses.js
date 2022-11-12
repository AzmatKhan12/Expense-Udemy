/** @format */

import React from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
  return (
    <div className="Expenses">
      <ExpenseItem
        date={props.item[0].date}
        title={props.item[0].expeseTitle}
        amount={props.item[0].expeseAmount}
        location={props.item[0].explocation}
      ></ExpenseItem>
      <ExpenseItem
        date={props.item[1].date}
        title={props.item[1].expeseTitle}
        amount={props.item[1].expeseAmount}
        location={props.item[1].explocation}
      ></ExpenseItem>
      <ExpenseItem
        date={props.item[2].date}
        title={props.item[2].expeseTitle}
        amount={props.item[2].expeseAmount}
        location={props.item[2].explocation}
      ></ExpenseItem>
    </div>
  );
};

export default Expenses;
