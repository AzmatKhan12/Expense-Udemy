import React,{useState,useEffect} from "react";
import './ExpenseForm.css';
import ExpNewForm from "./ExpNewForm";


const ExpenseForm = (props) => {

  const saveExpensDataHandaler = (enterdExpenseData) =>{
    // console.log(enterdExpenseData);
    const expenseData ={
      ...enterdExpenseData,
      id : Math.random().toString()
    }

    props.onAddExpense(expenseData);
    // console.log(expenseData);
    setEditing(false);
  }
   const [isEditing,setEditing] = useState(false);
    const startEditingHandler = ()=>{
      setEditing(true)
    }

    const stopEditingHandler= () =>{
      setEditing(false)
    }

    return (
      <div className="new-expense">
        {!isEditing && (
          <button onClick={startEditingHandler}>Add New Expenses</button>
        )}
        {isEditing && <ExpNewForm onSaveExpensData={saveExpensDataHandaler} onCancel={stopEditingHandler}/>}
      </div>
    );
 
}
export default ExpenseForm;