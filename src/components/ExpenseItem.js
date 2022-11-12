/** @format */
import React ,{useState} from  "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseTitle from "./ExpenseTitle";
import ExpenseAmount from "./ExpenseAmount";

const ExpenseItem = (props) => {
  const [newTitle,setNewTitle]=useState("")
 let  changeHandaler=(event)=>{
   setNewTitle(event.target.value);
  }

  const [title,setItem]= useState(props.title)
   
  let clickHandlar = ()=>{
     setItem(newTitle)
  }

  const [amount,setAmount]=useState(props.amount)
  let clickBtn= ()=>{
      setAmount('$100')
  }
 
  return (
    <div className="Expense-item">
      <ExpenseDate  date ={props.date}/>
       
      <ExpenseTitle 
        title ={title} 
        location = {props.location}/>
       
     <ExpenseAmount  amount ={amount}/>
     <button  onClick={clickBtn}>ChnageAmount</button>
     
     <input type="text" value={newTitle} onChange={changeHandaler}/>
     <button onClick={clickHandlar}>Delete-Expense</button>
   
    </div>
  );
}

export default ExpenseItem;
