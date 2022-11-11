
import './ExpenseAmount.css';


function ExpenseAmount(props){
    return <div className="Expene-item_price">${props.amount}</div>;
}

export default ExpenseAmount;