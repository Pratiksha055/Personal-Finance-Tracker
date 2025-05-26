import React, { useState } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import IncomeForm from './components/IncomeForm';
import ExpenseForm from './components/ExpenseForm';
import Overview from './components/Overview';
import SavingsGoalForm from './components/SavingsGoalForm';
import './App.css';

function App() {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [savingsGoal, setSavingsGoal] = useState(1000); // default goal

  const handleAddIncome = (income) => {
    setIncomes([...incomes, income]);
  };

  const handleAddExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };
  const handleDeleteIncome = (id) => {
    setIncomes(incomes.filter((item) => item.id !== id));
  }
  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter((item) => item.id !== id));
  };
  const handleSetGoal = (newGoal) => {
  setSavingsGoal(newGoal);
  };

  return (
    <div className="App">
      <Header />
      <SavingsGoalForm onSetGoal={handleSetGoal} />
      <Dashboard
        incomes={incomes}
        expenses={expenses}
        savingsGoal={savingsGoal}
      />
      <IncomeForm onAddIncome={handleAddIncome} />
      <ExpenseForm onAddExpense={handleAddExpense} />
      <Overview 
        incomes={incomes} 
        expenses={expenses} 
        onDeleteIncome={handleDeleteIncome}
        onDeleteExpense={handleDeleteExpense}

      />
    </div>
  );
}

export default App;
// This is the main application component for the Personal Finance Tracker.
// It manages the state for incomes, expenses, and savings goal,
// and renders the header, dashboard, forms for adding income and expenses, and an overview of the financial data.
// The `App` component uses React hooks to manage state and passes down necessary props to child components.