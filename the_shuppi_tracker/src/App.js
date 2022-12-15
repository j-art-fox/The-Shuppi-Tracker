import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      title: "Car Insurance",
      amount: Math.random() * 10,
      date: new Date(2021, 2, 28),
    },
    {
      title: "Monkies",
      amount: Math.random() * 10,
      date: new Date(2021, 2, 28),
    },
    { title: "Pens", amount: Math.random() * 10, date: new Date(2021, 2, 28) },
    {
      title: "Pencils",
      amount: Math.random() * 10,
      date: new Date(2021, 2, 28),
    },
    {
      title: "Puppies",
      amount: Math.random() * 10,
      date: new Date(2021, 2, 28),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
    </div>
  );
}

export default App;
