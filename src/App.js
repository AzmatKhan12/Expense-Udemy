/** @format */

 import ExpenseItem from './components/ExpenseItem';

function App() {
  
  let expense = [
    {
      id: "exp1",
      date: new Date(2022,11,10),
      expeseTitle: "food",
      expeseAmount: 8500,
      explocation: "Begumpet",
    },
    {
      id: "exp2",
      date: new Date(2021,12,25),
      expeseTitle: "Car Insurance",
      expeseAmount: 4000,
      explocation: "Dhanbad",
    },
    {
      id: "exp3",
      date: new Date(2022,6,10),
      expeseTitle: "Room Rent",
      expeseAmount: 4200,
      explocation: "Old Custom Basti",
    },
  ];

  return (
    <div>
      /<h1> Expense Tracker</h1>
      <ExpenseItem
        date={expense[0].date}
        title={expense[0].expeseTitle}
        amount={expense[0].expeseAmount}
        location={expense[0].explocation}
      ></ExpenseItem>
      <ExpenseItem
        date={expense[1].date}
        title={expense[1].expeseTitle}
        amount={expense[1].expeseAmount}
        location={expense[1].explocation}
      ></ExpenseItem>
      <ExpenseItem
        date={expense[2].date}
        title={expense[2].expeseTitle}
        amount={expense[2].expeseAmount}
        location={expense[2].explocation}
      ></ExpenseItem>
    </div>
  );
}

export default App;
