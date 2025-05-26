import React, { useState } from 'react';

const IncomeForm = ({ onAddIncome }) => {
  const [income, setIncome] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!income || isNaN(income)) return;

    onAddIncome({
      id: Date.now(),
      amount: parseFloat(income),
      description,
    });

    setIncome('');
    setDescription('');
  };

  return (
    <form className="income-form" onSubmit={handleSubmit}>
      <h3>Add Income</h3>
      <input
        type="text"
        placeholder="Source (e.g. Job)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default IncomeForm;
// This component allows users to add income sources and amounts.
// It includes input fields for the income source and amount, and a button to submit the form.