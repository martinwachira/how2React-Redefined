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

  console.log(filteredYear);
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeHandler={filterChangeHandler}
        />
        <ExpenseItem
          title={props.item[0].title}
          price={props.item[0].price}
          date={props.item[0].date}
        />
        <ExpenseItem
          title={props.item[1].title}
          price={props.item[1].price}
          date={props.item[1].date}
        />
        <ExpenseItem
          title={props.item[2].title}
          price={props.item[2].price}
          date={props.item[2].date}
        />
        <ExpenseItem
          title={props.item[3].title}
          price={props.item[3].price}
          date={props.item[3].date}
        />
      </Card>
    </div>
  );
};
export default Expenses;
