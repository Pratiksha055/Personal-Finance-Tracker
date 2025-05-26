import React, { useState } from 'react';

const ExpenseForm = ({ onAddExpense }) => {
  const [expense, setExpense] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!expense || isNaN(expense)) return;

    onAddExpense({
      id: Date.now(),
      amount: parseFloat(expense),
      description,
    });

    setExpense('');
    setDescription('');
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <h3>Add Expense</h3>
      <input
        type="text"
        placeholder="Category (e.g. Groceries)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={expense}
        onChange={(e) => setExpense(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default ExpenseForm;
// This component allows users to add expenses and their categories.
// It includes input fields for the expense category and amount, and a button to submit the form.