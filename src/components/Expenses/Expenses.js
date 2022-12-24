/** @format */

import React,{useState} from "react";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import ExpenseItem from "./ExpenseItem";


const Expenses = ({item}) => {
  const [filterdYear, setFilterdYear] = useState("2022");

  const FilterChangeHandlar = (selectedYear) => {
    setFilterdYear(selectedYear);
  };
  
  const filterdExpense =Object.values(item).filter(expense =>{
   
    return expense.date === filterdYear;
  })
  
  // const userData = filterdExpense.map((elem)=>{
  //   return (
  //     <ExpenseItem
  //      key = {elem.id} 
  //      date ={elem.date}
  //      title= {elem.title} 
  //      amount={elem.amount}
      
  //     />
  //   );
  // })
  
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
