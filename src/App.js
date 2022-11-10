/** @format */

 import ExpenseItem from './components/ExpenseItem';

function App() {
  let expense = [
    {
      expeseTitle: "food",
      expeseAmount: 100,
    },
    {
      expeseTitle: "petrol",
      expeseAmount: 500,
    },
    {
      expeseTitle: "Movies",
      expeseAmount: 800,
    }
  ];

  return (
    <div>
      /<h1> Expense Tracker</h1>
      <ExpenseItem
        title={expense[0].expeseTitle}
        amount={expense[0].expeseAmount}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[1].expeseTitle}
        amount={expense[1].expeseAmount}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[2].expeseTitle}
        amount={expense[2].expeseAmount}
      ></ExpenseItem>
    </div>
  );
}

export default App;
