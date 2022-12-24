import React from "react";
import './EXpensesList.css';
import ExpenseItem from "./ExpenseItem";

const ExpensesList = props =>{
     
    if(props.items.length === 0){
        return <h2 className="expenses-list__fallback"> Expenses not Found</h2>;
    }
    else if (props.items.lenght ===1){
        return  alert(<h2 className="expenses-list__fallback"> Only One Expenses here </h2>);
    }

    return (
        <ul className="expenses-list">
          {
            props.items.map((val, key) => (
            <ExpenseItem
              id = {val.id}
              key={val.id}
              date={val.date} 
              title={val.title}
              amount={val.amount}
            ></ExpenseItem>
          ))
        }
        </ul>
    );

}

export default ExpensesList;