import './App.css';
import Header from './components/Header/Header'
import ExpenseItem from './components/ExpenseItem/ExpenseItem';

function App() {
  const expences = [
    {
      id: 'e1',
      date: new Date(2021, 2, 28),
      title: 'electricity',
      price: 100
    },
    {
      id: 'e2',
      date: new Date(2021, 4, 12),
      title: 'groceries',
      price: 220
    },
    {
      id: 'e3',
      date: new Date(2021, 9, 15),
      title: 'car insurance',
      price: 100
    }
  ]

  const expenseList = expences.map(expense => ( 
    <ExpenseItem date={expense.date} title={expense.title} price={expense.price} />
  ))


  return (
    <div className="App">
      <Header />
      {expenseList}
      <ExpenseItem 
        date={new Date(2021, 9, 15)}
        title="gifts"
        price="120.55" />
    </div>
  );
}

export default App;
