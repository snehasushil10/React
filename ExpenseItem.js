import './ExpenseItem.css';
function ExpenseItem() {
  const expenseDate = new Date(2021, 2, 28);
  const expenseTitle = "Car Insurance";
  const expenseAmount = 294.67;
  const locationofExpenditure ="bangalore";
  return (
    //<div>
    // <h2>Expense items</h2>
    //  <div>Food Rs 10</div>
    //   <div>Petrol Rs 100</div>
    // <div>Movies Rs 200</div>
    //</div>

    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
        <div className='expense__location'>{locationofExpenditure}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
