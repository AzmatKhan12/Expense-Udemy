/** @format */

import React,{useState} from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";


const Expenses = ({ item }) => {
  const [selectYear, setSelectedYear] = useState("2018");

  const FilterChangeHandlar = (selectedYear) => {
    setSelectedYear(selectedYear);
  };
  return (
    <div>
        <div>
          <ExpensesFilter
            selected={selectYear}
            onChangeFilter={FilterChangeHandlar}
          />
        </div>
        <div className="Expenses">
          {
              item.map((val, key) => {
              return (
                <ExpenseItem
                  date={val.date}
                  title={val.expeseTitle}
                  amount={val.expeseAmount}
                ></ExpenseItem>
              );
            })
          }
        </div>
    </div>
  );
};

export default Expenses;
