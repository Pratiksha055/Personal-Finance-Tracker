import React from 'react';

const Overview = ({ incomes, expenses, onDeleteIncome, onDeleteExpense }) => {
  return (
    <div className="overview">
      <section className="income-list">
        <h3>Income</h3>
        <ul>
          {incomes.length === 0 && <li>No income entries yet.</li>}
          {incomes.map((item) => (
            <li key={item.id}>
              {item.description} — ${item.amount.toFixed(2)}
              <button className="delete-btn" onClick={() => onDeleteIncome(item.id)}>Delete</button>

            </li>
          ))}
        </ul>
      </section>

      <section className="expense-list">
        <h3>Expenses</h3>
        <ul>
          {expenses.length === 0 && <li>No expense entries yet.</li>}
          {expenses.map((item) => (
            <li key={item.id}>
              {item.description} — ${item.amount.toFixed(2)} 
              <button className="delete-btn" onClick={() => onDeleteExpense(item.id)}>Delete</button>

            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Overview;
// This component displays a detailed overview of incomes and expenses.
// It includes lists for both incomes and expenses, with options to delete individual entries.