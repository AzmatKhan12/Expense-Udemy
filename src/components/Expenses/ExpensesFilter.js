import React from "react";
import './Expensesfilter.css'
 
const ExpensesFilter = (props) =>{
      
     const dropDwonChangeHandler = (event)=>{
         props.onChangeFilter(event.target.value)
     }
    return (
      <div className="expense-filter">
        <div className="expense-filter__control">
          <labe>Filter by Year</labe>
          <select value={props.selected} onChange={dropDwonChangeHandler}>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
          </select>
        </div>
      </div>
    );
}

export default ExpensesFilter;