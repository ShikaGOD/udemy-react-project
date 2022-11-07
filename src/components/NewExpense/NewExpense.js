import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  }

  function showDisplay() {
    let addBtn = document.querySelector('#addNewExpenseBtn');
    let showForm = document.querySelector('#form');

    addBtn.style.display = 'none';
    showForm.style.display = 'block';
    console.log('hello from display')
  }

  return (
    <div>
      <div id="addNewExpenseBtn" className="add-new-expense">
        <button  onClick={showDisplay}>Add New Expense</button>
      </div>
      <div id="form" className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
      </div>
    </div>
  );
}

export default NewExpense;
