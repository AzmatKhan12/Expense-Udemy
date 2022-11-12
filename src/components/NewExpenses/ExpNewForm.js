import React ,{useState}from "react";
import './ExpNewForm.css';

const ExpNewForm = () => {

  const [enterdTitle,setEnterdTitle]= useState('');
  const [enterdAmount, setEnterdAmount] = useState("");
  const [enterdDate, setEnterdDate] = useState("");
   
    const titleChangeHandler =(event) => {
      setEnterdTitle(event.target.value);
    }  
   const amountChangeHandler =(event) => {
    setEnterdAmount(event.target.value);
   } 
   const dateChangeHandler =(event) => {
    setEnterdDate(event.target.value);
   }   

    return (
      <form>
        <div className="new-expense__controls">
          <div className="new-expense__control1">
            <label>Title</label>
            <input type="text" onChange={titleChangeHandler} />
          </div>

          <div className="new-expense__control1">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control1">
            <label>Date</label>
            <input type="date" onChange={dateChangeHandler} />
          </div>
        </div>
        <div className="new--expens__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    );
}

export default ExpNewForm;