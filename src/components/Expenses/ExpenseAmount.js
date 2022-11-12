/** @format */

import React from "react";
import "./ExpenseAmount.css";

const ExpenseAmount = (props) => {
  return (
    <div className="Expense-item_description">
      <div className="Expene-item_price">${props.amount}</div>;
    </div>
  );
};

export default ExpenseAmount;
