/** @format */

import React,{useState} from "react";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";


const Expenses = (props) => {
  const [filterdYear, setFilterdYear] = useState("2022");

  const FilterChangeHandlar = (selectedYear) => {
    setFilterdYear(selectedYear);
  };

  const filterdExpense =props.item.filter(expense =>{
    return expense.date.getFullYear().toString() === filterdYear;
  })

  return (
    <div>
      <div className="Expenses">
        <ExpensesFilter
          selected={filterdYear}
          onChangeFilter={FilterChangeHandlar}
        />

        <ExpensesChart expenses={filterdExpense} />

        <ExpensesList items={filterdExpense} />
      </div>
    </div>
  );
};

export default Expenses;
