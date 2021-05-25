import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // intro states
  // const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    console.log("title change");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate dat={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <p></p>
        <div className="expense-item__price">${props.price}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
};

export default ExpenseItem;
