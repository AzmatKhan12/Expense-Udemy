/** @format */



 
 import React, { useEffect, useState } from "react";
 import axios from "axios";
 import ExpenseForm from "../../components/NewExpenses/ExpenseForm";
 import ExpensesList from "../Expenses/ExpensesList";
 import AuthContext from "../Store/Auth-context";
 import { useContext } from "react";

  // import classes from "./StartingPageContent.module.css";

const StartingPageContent = () => {
  const [expenses, setExpenses] = useState([]);
  const authCtx =useContext(AuthContext);
  const userEmailId =authCtx.email?.split(".").join("");
  const cleanUserEmailId = userEmailId?.split('@').join("");
  
    
   useEffect(() => {
     getRequest();
   }, [cleanUserEmailId]);

   async function getRequest() {
     try {
       const response = await axios.get(
         `https://expense-tracker-40b34-default-rtdb.firebaseio.com/expense.json`
       );
       const data = await response.data;
        data === null ? setExpenses([]): setExpenses(data);
       console.log(data);
     } catch (error) {
       console.log(error);
     }
   }

   async function addExpenseHandlar (expense) {
    console.log({expense})
     
     try{
      const response = await axios.post(
        `https://expense-tracker-40b34-default-rtdb.firebaseio.com/expense.json`,
        expense
      );
      const data =await console.log(response.data)
       getRequest();
     }
     catch(error){
        console.log(error)
     }
    }
     
   async function deleteHandler() { 
    setExpenses([]);
     try{
      const response = await axios.delete(
        `https://expense-tracker-40b34-default-rtdb.firebaseio.com/expense.json`,
        expenses
      );
      console.log ('delete')
      const data =await (response.data)
       getRequest();
     }
     catch(error){
        console.log(error)
     }
    }

     
   async function editHandler() {
     console.log('edit')
     try {
       const response = await axios.put(
         `https://expense-tracker-40b34-default-rtdb.firebaseio.com/expense.json`,
         expenses
       );
       console.log("edit");
       const data = await (response.data);
       getRequest();
     } catch (error) {
       console.log(error);
     }
   }
  
  return (
    <div>
      <ExpenseForm onAddExpense={addExpenseHandlar} />
      <ExpensesList
        items={expenses}
        onDelete={deleteHandler}
        onEdit={editHandler}
      />
    </div>
  );
};

export default StartingPageContent;
