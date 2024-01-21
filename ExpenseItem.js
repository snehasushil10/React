import "./ExpenseItem.css";
function ExpenseItem(props) {
  //const expenseDate = new Date(2021, 2, 28);
  //const expenseTitle = "Car Insurance";
  //const expenseAmount = 294.67;
  //const locationofExpenditure = "bangalore";
  return (
    //<div>
    //<h2>Expense items</h2>
    //<div>Food Rs 10</div>
    //<div>Petrol Rs 100</div>
    //<div>Movies Rs 200</div>
    //</div>
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <div className="expense__location">{props.location}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
