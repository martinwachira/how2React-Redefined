import React, { useState } from "react";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpenseList from "../ExpenseList/ExpenseList";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setfilteredYear] = useState("2020");
  const filterChangeHandler = (selectedfilteredYear) => {
    setfilteredYear(selectedfilteredYear);
  };

  const theFilteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeHandler={filterChangeHandler}
        />
        <ExpenseList items={theFilteredExpense} />
      </Card>
    </div>
  );
};
export default Expenses;
