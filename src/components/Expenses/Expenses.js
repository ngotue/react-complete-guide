import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

export default function Expenses(props) {
  const [expenses, setExpenses] = useState(props.expenses);
  const [filteredYear, setFilteredYear] = useState(2020);

  const filterChangeHandler = (year) => {
    setFilteredYear(year);
    setExpenses(() =>
      props.expenses.filter(({ date }) => date.getFullYear() === year)
    );
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onFilterChange={filterChangeHandler}
      />
      {expenses.map((expense) => (
        <ExpenseItem expense={expense} key={expense.id}></ExpenseItem>
      ))}
    </Card>
  );
}
