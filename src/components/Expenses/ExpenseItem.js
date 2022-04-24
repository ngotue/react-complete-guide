import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

export default function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expense.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.expense.title}</h2>
        <div className="expense-item__price">{props.expense.amount}</div>
      </div>
    </Card>
  );
}
