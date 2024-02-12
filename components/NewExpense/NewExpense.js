import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import ExpenseItem from "../Expenses/ExpenseItem"; // Import the ExpenseItem component

const NewExpense = (props) => {
  const [enteredExpense, setEnteredExpense] = useState(null);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    setEnteredExpense(expenseData);
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
      {enteredExpense && (
        <ExpenseItem
          title={enteredExpense.title}
          amount={enteredExpense.amount}
          date={enteredExpense.date}
        />
      )}
    </div>
  );
};

export default NewExpense;
