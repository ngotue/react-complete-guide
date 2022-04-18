import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

export default function Expenses(props) {
  return (
    <Card className="expenses">
      {props.expenses.map((expense) => (
        <ExpenseItem expense={expense} key={expense.id}></ExpenseItem>
      ))}
    </Card>
  );
}
