import ExpenseItem from "./ExpenseItem";
import './Expenses.css'

function Expenses(props) {
  return (
    <div className="expenses">
        {props.items.map((expence) => (
        <ExpenseItem
          title={expence.title}
          amount={expence.amount}
          date={expence.date}
        />
      ))}
    </div>
)
}

export default Expenses;