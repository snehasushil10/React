import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title || "Default Title");
  const [amount, setAmount] = useState(props.amount || 0);

  const clickHandler = () => {
    setTitle('updated');
    console.log(title);
  };

  const deleteExpenseHandler = () => {
    // Assuming you have an onDeleteExpense prop to handle deletion
    props.onDeleteExpense(props.id);
  };

  const addAmountHandler = () => {
    setAmount(amount + 100);
    console.log(amount);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={title}
        amount={amount}
        location={props.location}
      />
      <button onClick={clickHandler}>Change title</button>
      <button onClick={deleteExpenseHandler}>Delete ExpenseItem</button>
      <button onClick={addAmountHandler}>Add $100 to Amount</button>
    </Card>
  );
};

export default ExpenseItem;
