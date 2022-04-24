import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseHandler = expenseData => {
    props.onSaveExpense({ ...expenseData, id: new Date().getTime() });
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={saveExpenseHandler}></ExpenseForm>
    </div>
  );
};

export default NewExpense;
