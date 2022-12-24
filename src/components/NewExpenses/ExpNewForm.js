import React ,{useEffect, useState}from "react";
import './ExpNewForm.css';
import axios from "axios";

const ExpNewForm = (props) => {
  
  const [enterdTitle,setEnterdTitle]= useState('');
  const [enterdAmount, setEnterdAmount] = useState("");
  const [enterdDate, setEnterdDate] = useState("");
 
   
  const titleChangeHandler = (event) => {
     setEnterdTitle(event.target.value);
    
    
  };

  const amountChangeHandler = (event) => {
     setEnterdAmount(event.target.value);
    
  };

  const dateChangeHandler = (event) => {
    setEnterdDate(event.target.value);
   
  };

    async function submitHandler(event) {
     event.preventDefault();

     const expenseData = {
       expeseTitle: enterdTitle,
       expeseAmount: enterdAmount,
       date: new Date(enterdDate),
     };
     
     try{
      const response = await axios.post(
        "https://expense-tracker-40b34-default-rtdb.firebaseio.com/expense.json",
        expenseData
      );
      const data =await console.log(response.data)
     }
     catch(error){
        console.log(error)
     }

     props.onSaveExpensData(expenseData);

     console.log(expenseData);
     setEnterdTitle("");
     setEnterdAmount("");
     setEnterdDate("");
   };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control1">
          <label>Title</label>
          <input
            type="text"
            value={enterdTitle}
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-expense__control1">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enterdAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control1">
          <label>Date</label>
          <input type="date" value={enterdDate} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new--expens__actions">
        <button type="button" onClick={props.onCancel}>Cancel </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpNewForm;

