import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [expense, setExpense] = useState({
    title: "",
    date: '',
    amount: 0,
  });

  const expenseChangeHandler = (attr) => (event) => {
    setExpense((previousState) => ({
      ...previousState,
      [attr]: event.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSaveExpense(expense);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={expense.title}
            onChange={expenseChangeHandler("title")}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={expense.amount}
            onChange={expenseChangeHandler("amount")}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-04-01"
            max="2022-12-31"
            value={expense.date}
            onChange={expenseChangeHandler("date")}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
