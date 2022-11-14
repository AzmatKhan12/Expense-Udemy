/** @format */

import React,{useState} from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";


const Expenses = (props) => {
  const [filterdYear, setFilterdYear] = useState("2022");

  const FilterChangeHandlar = (selectedYear) => {
    setFilterdYear(selectedYear);
  };

  const filterdExpense =props.item.filter(expense =>{
    return expense.date.getFullYear().toString() === filterdYear;
  })

  let expenseContent = <p>No Expenses found</p>;
    if(filterdExpense.length >0){
      expenseContent =filterdExpense.map((val, key) => (
            <ExpenseItem
              key={val.id}
              date={val.date} 
              title={val.expeseTitle}
              amount={val.expeseAmount}
            ></ExpenseItem>
          ))
    }
  return (
    <div>
      <div>
        <ExpensesFilter
          selected={filterdYear}
          onChangeFilter={FilterChangeHandlar}
        />
      </div>
      <div className="Expenses">
       
       {expenseContent }
       
      </div>
    </div>
  );
};

export default Expenses;
