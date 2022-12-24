/** @format */

import React from "react";
import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const month = new Date(props.date.toLocaleString("en-US", { month: "long" })); ;
  const day = new Date (props.date.toLocaleString("en-US", { day: "2-digit" })) ;
  const year =  new Date (props.date.getFullYear());

  return (
    <div className="Expene-item_date">
      <div>{month}</div>
      <div>{day}</div>
      <div> {year}</div>
    </div>
  );
};

export default ExpenseDate;
