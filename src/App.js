import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: 2,
      date: new Date(2019, 3, 14),
      title: "House Door",
      price: 110,
    },
    {
      id: 2,
      date: new Date(2017, 5, 20),
      title: "Laptop",
      price: 120,
    },
    {
      id: 3,
      date: new Date(2021, 11, 30),
      title: "Car Engine",
      price: 8900,
    },
    {
      id: 4,
      date: new Date(2015, 7, 30),
      title: "Heater",
      price: 150,
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        price={expenses[0].price}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        price={expenses[1].price}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        price={expenses[2].price}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        price={expenses[3].price}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
