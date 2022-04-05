import { ExpenseItem } from "./ExpenseItem";
import "./Expenses.css";

export function Expenses(props) {
  return (
    <div className="expenses">
      {props.expenses.map((expense) => (
        <ExpenseItem expense={expense} key={expense.id}></ExpenseItem>
      ))}
    </div>
  );
}
