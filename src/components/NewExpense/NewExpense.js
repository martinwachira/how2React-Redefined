import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [open, setOpen] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const onCloseForm = () => {
    setOpen(false);
  };

  return (
    <div className="new-expense">
      {!open && <button onClick={handleOpen}>Add New Expense</button>}
      {open && (
        <ExpenseForm
          onCancel={onCloseForm}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
