import "./ExpenseItem.css"
function ExpenseDetails(props){
    const title1 = props.title;
    const amount =props.amount;
    const location = props.location;
    return (
    <div className="expense-item__description">
    <h2>{title1}</h2>
    <div className="expense-item__price">${amount}</div>
    <div className="expense__location">{location}</div>
  </div>
    );
}
export default ExpenseDetails;