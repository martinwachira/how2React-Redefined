function ExpenseDate(props) {
  const month = props.dat.toLocaleString("en-US", { month: "long" });
  const day = props.dat.toLocaleString("en-US", { day: "2-digit" });
  const year = props.dat.getFullYear();

  return (
    <div>
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
    </div>
  );
}

export default ExpenseDate;
