import React from "react";
import './EXpensesList.css';
import ExpenseItem from "./ExpenseItem";
import { Card } from "react-bootstrap";

const ExpensesList = props =>{
     

    return (
     
        <ul className="expenses-list">
          {Object.values(Object(props.items)).map((val) => (
            <ExpenseItem
              id={val.id}
              key={val.id}
              date={val.date}
              title={val.title}
              amount={val.amount}
              delete={props.onDelete}
              edit ={props.onEdit}
            ></ExpenseItem>
          ))}
        </ul>
      
    );

}

export default ExpensesList;