import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Blinker from "./components/UI/Blinker";

const DUMB_EXP = [
  {
    id: 1,
    date: new Date(2019, 3, 14),
    title: "House Door",
    price: 110,
  },
  {
    id: 2,
    date: new Date(2020, 6, 20),
    title: "Laptop",
    price: 120,
  },
  {
    id: 3,
    date: new Date(2021, 11, 10),
    title: "Car Engine",
    price: 8900,
  },
  {
    id: 4,
    date: new Date(2020, 6, 30),
    title: "Heater",
    price: 150,
  },
  {
    id: 5,
    date: new Date(2020, 7, 12),
    title: "Keyboard",
    price: 15,
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMB_EXP);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <Blinker />
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
