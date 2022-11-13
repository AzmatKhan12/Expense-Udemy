/** @format */

 import React,{useState} from 'react';
import Expenses from './components/Expenses/Expenses';
import ExpenseForm from './components/NewExpenses/ExpenseForm';


  let Dummy_Expenses = [
    {
      id: "exp1",
      date: new Date(2022, 11, 10),
      expeseTitle: "food",
      expeseAmount: 8500,
      
    },
    {
      id: "exp2",
      date: new Date(2021, 12, 25),
      expeseTitle: "Car Insurance",
      expeseAmount: 4000,
      
    },
    {
      id: "exp3",
      date: new Date(2022, 6, 10),
      expeseTitle: "Room Rent",
      expeseAmount: 4200,
      
    },
  ];

const App = ()=> {

  const [expenses, setExpenses] = useState(Dummy_Expenses);
  
  const addExpenseHandlar =(expense) =>{
    
    let updatedExpense = [expense,...expenses]
    setExpenses(updatedExpense);
    console.log(updatedExpense);
    
  };

  return (
    <div>
      <ExpenseForm onAddExpense={addExpenseHandlar} />
      <Expenses item={expenses} />
    </div>
  );
}

export default App;

