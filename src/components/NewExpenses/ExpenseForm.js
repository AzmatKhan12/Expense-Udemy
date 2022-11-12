import React from "react";
import './ExpenseForm.css';
import ExpNewForm from "./ExpNewForm";

const ExpenseForm = () => {
    return(
        <div className="new-expense">
          <ExpNewForm/>
        </div>
    );
 
}
export default ExpenseForm;