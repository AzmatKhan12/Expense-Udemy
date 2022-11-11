/** @format */

import "./ExpenseItem.css";
function ExpenseItem (props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="Expense-item">
      <div>
        <div>{month}</div>
        <div>{day}</div>
        <div> {year}</div>
      </div>
      <h2 className="h2">{props.title}</h2>
      <div>location: {props.location}</div>
      <div className="Expense-item_description">
        <div className="Expene-item_price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
