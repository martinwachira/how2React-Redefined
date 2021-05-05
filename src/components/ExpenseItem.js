import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2020, 3, 24);
  const expenseTitle = "House Insurance";
  const expensePrice = 456.98;

  return (
    <div className="expense-item">
      <div>{expenseDate.toDateString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expensePrice}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
