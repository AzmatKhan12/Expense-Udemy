  import './ExpenseItem.css';

function ExpenseItem(props){
    return (
      <div className="Expense-item">
        <div className="Expene-item_price">
          <h3> {props.title}</h3>
          <p> Rs{props.amount}</p>
        </div>
        <div></div>
      </div>
    );
}

export default ExpenseItem;