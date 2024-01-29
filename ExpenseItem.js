import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";
import Card from "../UI/Card";
const ExpenseItem = (props) => {
  //const expenseDate = new Date(2021, 2, 28);
  //const expenseTitle = "Car Insurance";
  //const expenseAmount = 294.67;
  //const locationofExpenditure = "bangalore";
  const clickHandler = () => {
    console.log("Clicked!!!");
  };
  const deleteExpenseHandler = () => {
    const expenseitem = document.querySelector(".expense-item");
    expenseitem.remove();
  };

  return (
    //<div>
    //<h2>Expense items</h2>
    //<div>Food Rs 10</div>
    //<div>Petrol Rs 100</div>
    //<div>Movies Rs 200</div>
    //</div>
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={props.title}
        amount={props.amount}
        location={props.location}
      />
      <button onClick={clickHandler}>Change title</button>
      <button onClick={deleteExpenseHandler}>Delete ExpenseItem</button>
    </Card>
  );
};
export default ExpenseItem;
