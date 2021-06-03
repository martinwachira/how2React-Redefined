import React, { useState } from "react";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setfilteredYear] = useState("2020");
  const filterChangeHandler = (selectedfilteredYear) => {
    setfilteredYear(selectedfilteredYear);
  };

  const theFilteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  /* conditional logic */
  // maintains a lean jsx by only returning the assigned variable //
  let expenseData = <p>No expenses found.</p>;
  if (theFilteredExpense.length > 0) {
    expenseData = theFilteredExpense.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        price={expense.price}
        date={expense.date}
      />
    ));
  }
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeHandler={filterChangeHandler}
        />
        {expenseData}
      </Card>
    </div>
  );
};
export default Expenses;
