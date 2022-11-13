import React from "react";
import './ExpenseForm.css';
import ExpNewForm from "./ExpNewForm";

const ExpenseForm = (props) => {
  const saveExpensDataHandaler = (enterdExpenseData) =>{
    const expenseData ={
      ...enterdExpenseData,
      id : Math.random().toString()
    }

    props.onAddExpense(expenseData)
    console.log(expenseData);
  }

    return (
      <div className="new-expense">
        <ExpNewForm onSaveExpensData={saveExpensDataHandaler} />
      </div>
    );
 
}
export default ExpenseForm;