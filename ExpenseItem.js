import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('updated'); 
    console.log(title);
  };

  const deleteExpenseHandler = () => {
    const expenseItem = document.querySelector(".expense-item");
    expenseItem.remove();
  };
  const [amount, setAmount] = useState(props.amount);
 const addbutton=()=>{
setAmount('100');
console.log(amount);
 }
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
      <button onClick={addbutton}>Change Expense</button>
    </Card>
  );
};

export default ExpenseItem;
