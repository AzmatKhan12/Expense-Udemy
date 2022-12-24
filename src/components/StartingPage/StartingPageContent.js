/** @format */



 import axios from "axios";
import React, { useEffect, useState } from "react";
 import Expenses from "../../components/Expenses/Expenses";
 import ExpenseForm from "../../components/NewExpenses/ExpenseForm";

//  import classes from "./StartingPageContent.module.css";

 

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
      date: new Date(2020, 6, 10),
      expeseTitle: "Room Rent",
      expeseAmount: 4200,
    },
  ];

  const StartingPageContent = () => {
  const [expenses, setExpenses] = useState([]);

   useEffect(() => {
     getRequest();
   }, []);

   async function getRequest() {
     try {
       const response = await axios.get(
         "https://expense-tracker-40b34-default-rtdb.firebaseio.com/expense.json"
       );
       const data = await (response.data)
       setExpenses(data);
       console.log({data});
     } catch (error) {
       console.log(error);
     }
   }

  const addExpenseHandlar = (expense) => {
    console.log({expense})
    setExpenses(expense);
      // return [expense, ...expenses];
    
  };
 

  
  return (
    <div>
      <ExpenseForm onAddExpense={addExpenseHandlar} />
      <Expenses item={expenses} />
    </div>
  );
};

export default StartingPageContent;
