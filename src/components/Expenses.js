import React from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';

const Expenses = (props) => {
    return (
      <div className="Expenses">
        {
          props.item.map((expense) => (
            <ExpenseItem
              date={expense.date}
              title={expense.expeseTitle}
              amount={expense.expeseAmount}
            />
          ))
        }
      </div>
    );
}

export default Expenses;