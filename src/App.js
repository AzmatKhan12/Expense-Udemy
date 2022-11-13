/** @format */

 import React from 'react';
import Expenses from './components/Expenses/Expenses';
import ExpenseForm from './components/NewExpenses/ExpenseForm';

const App = ()=> {
  
  let expense = [
    {
      id: "exp1",
      date: new Date(2022,11,10),
      expeseTitle: "food",
      expeseAmount: 8500,
      explocation: "Begumpet",
    },
    {
      id: "exp2",
      date: new Date(2021,12,25),
      expeseTitle: "Car Insurance",
      expeseAmount: 4000,
      explocation: "Dhanbad",
    },
    {
      id: "exp3",
      date: new Date(2022,6,10),
      expeseTitle: "Room Rent",
      expeseAmount: 4200,
      explocation: "Old Custom Basti",
    },
  ];
   
  const addExpenseHandlar =(expense) =>{
     console.log(expense)
  }
  

  
  
  return (
    <div>
      <ExpenseForm onAddExpense={addExpenseHandlar} />
      <Expenses item={expense} />
    </div>
  );
}

export default App;

