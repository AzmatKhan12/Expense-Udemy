
import './ExpenseTitle.css';

const ExpenseTitle = (props) =>{

    return (
      <div className="title-location">
        <h2 className="h2">{props.title}</h2>
        <div>location: {props.location}</div>
      </div>
    );

}

export default ExpenseTitle;