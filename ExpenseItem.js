import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
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
     <ExpenseDate date={props.date}/>
     <ExpenseDetails  title = {props.title}  amount ={props.amount} location = {props.location}/>
     
    </div>
  );
}
export default ExpenseItem;
