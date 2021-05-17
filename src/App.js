import React from "react";
import Expenses from "./components/Expenses/Expenses";
import Blinker from "./components/UI/Blinker";

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
      <Blinker />
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
