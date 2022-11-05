import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css';

function Expenses(props) {
  return (
    <Card className="expenses">
        {props.items.map((expence) => (
        <ExpenseItem
          title={expence.title}
          amount={expence.amount}
          date={expence.date}
        />
      ))}
    </Card>
)
}

export default Expenses;