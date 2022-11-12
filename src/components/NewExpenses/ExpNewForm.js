import React from "react";
import './ExpNewForm.css';

const ExpNewForm = () => {
    return (
      <form>
        <div className="new-expense__controls">
          <div className="new-expense__control1">
            <label>Title</label>
            <input type="text" />
          </div>

          <div className="new-expense__control1">
            <label>Amount</label>
            <input type="number"  min='0.01' step='0.01'/>
          </div>
          <div className="new-expense__control1">
            <label>Date</label>
            <input type="date" />
          </div>
        </div>
        <div className="new--expens__actions">
        <button type="submit">Add Expense</button>
        </div>
      </form>
    );
}

export default ExpNewForm;