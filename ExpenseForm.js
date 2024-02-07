import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  //const [enteredTitle, setEnteredTitle] = useState("");
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });
  const titleChangeHandler = (event) => {
    // setEnteredTitle(event.target.value);
    setUserInput({
      ...userInput,
      enteredTitle: event.target.value,
    });
  };
  // const [enteredAmount, setEnteredAmount] = useState("");
  const amountChangeHandler = (event) => {
    //setEnteredAmount(event.target.value);
    setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    });
  };
  //const [enteredDate, setEnteredDate] = useState("");
  const dateChangeHandler = (event) => {
    //setEnteredDate(event.target.value);
    setUserInput({
      ...userInput,
      enteredDate: event.target.value,
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };
    props.onsaveExpenseData(expenseData);
    setUserInput({
      enteredTitle: " ",
      enteredAmount: " ",
      enteredDate: " ",
    });
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Expense Title</label>
          <input
            type="text"
            value={userInput.enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Expense Amount</label>
          <input
            type="number"
            value={userInput.enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Expense Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={userInput.enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
