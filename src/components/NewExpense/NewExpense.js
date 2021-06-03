import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [open, setOpen] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    setOpen(false);
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const onCloseForm = () => {
    setOpen(false);
  };

  // if (open === true) {
  //   return (
  //     <div className="new-expense">
  //       <ExpenseForm
  //         onCancel={onCloseForm}
  //         onSaveExpenseData={saveExpenseDataHandler}
  //       />
  //     </div>
  //   );
  // }

  return (
    <div className="new-expense">
      {open === false && <button onClick={handleOpen}>Add New Expense</button>}
      {open === true && (
        <ExpenseForm
          onCancel={onCloseForm}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
