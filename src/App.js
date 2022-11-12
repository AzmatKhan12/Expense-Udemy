/** @format */

 import React from 'react';
import Expenses from './components/Expenses';

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
 
  // this is JavaScript code
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h1", {}, "Expense Tracker"),
  //   React.createElement(Expenses,{item:expense})
  // );

  
  // this is JSX code 
  return (
    <div>
      <h1> Expense Tracker</h1>
      <Expenses item ={expense}/>
    </div>
  );
}

export default App;

