import React ,{useState}from "react";
import './ExpNewForm.css';

const ExpNewForm = (props) => {
  //by using multiple state
  // const [enterdTitle,setEnterdTitle]= useState('');
  // const [enterdAmount, setEnterdAmount] = useState("");
  // const [enterdDate, setEnterdDate] = useState("");
 
  //by using single  state
  const [userInput, setUserInput] = useState({
    enterdTitle: "",
    enterdAmount: "",
    enterdDate: ""
  });

  const titleChangeHandler = (event) => {
    // setEnterdTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enterdTitle: event.target.value
    // });

    setUserInput((preState)=>{
      return { ...preState, enterdTitle: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    // setEnterdAmount(event.target.value);
    //  setUserInput({
    //    ...userInput,
    //    enterdAmount: event.target.value,
    //  });

     setUserInput((preState) => {
       return { ...preState, enterdAmount: event.target.value };
     });
  };

  const dateChangeHandler = (event) => {
    // setEnterdDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enterdDat: event.target.value,
    // });

    setUserInput((preState) => {
      return { ...preState, enterdDat: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      ...userInput,
      
    };

    props.onSaveExpensData(expenseData);

    console.log(expenseData);
   
      setUserInput("");
      
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control1">
          <label>Title</label>
          <input
            type="text"
            value={userInput[0]}
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-expense__control1">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput[1]}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control1">
          <label>Date</label>
          <input
            type="date"
            value={userInput[2]}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new--expens__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpNewForm;