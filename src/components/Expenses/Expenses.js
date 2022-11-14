/** @format */

import React,{useState} from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";


const Expenses = (props) => {
  const [filterdYear, setSelectedYear] = useState("2022");

  const FilterChangeHandlar = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  const filterdExpense =props.item.filter(expense =>{
    return expense.date.getFullYear().toString() === filterdYear;
  })
  return (
    <div>
      <div>
        <ExpensesFilter
          selected={filterdYear}
          onChangeFilter={FilterChangeHandlar}
        />
      </div>
      <div className="Expenses">
        {
          filterdExpense.map((val, key) => (
            <ExpenseItem
              key={val.id}
              date={val.date}
              title={val.expeseTitle}
              amount={val.expeseAmount}
            ></ExpenseItem>
          ))
        }
      </div>
    </div>
  );
};

export default Expenses;
