import React from 'react';

const Dashboard = ({ incomes, expenses, savingsGoal }) => {
  const totalIncome = incomes.reduce((sum, entry) => sum + entry.amount, 0);
  const totalExpense = expenses.reduce((sum, entry) => sum + entry.amount, 0);
  const netBalance = totalIncome - totalExpense;

  const progressPercent =
    savingsGoal > 0 ? Math.min((netBalance / savingsGoal) * 100, 100) : 0;

  return (
    <div className="dashboard">
      <section className="summary">
        <h3>Summary</h3>
        <br />
        <p><strong>Total Income:</strong> ${totalIncome.toFixed(2)}</p>
        <p><strong>Total Expenses:</strong> ${totalExpense.toFixed(2)}</p>
        <p><strong>Net Balance:</strong> ${netBalance.toFixed(2)}</p>
        <p><strong>Savings Goal:</strong> ${savingsGoal}</p>
        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
        <p><em>{progressPercent.toFixed(1)}% toward your goal</em></p>
      </section>
    </div>
  );
};

export default Dashboard;
// This component displays a summary of the user's financial status, including total income, expenses, net balance, and progress towards a savings goal.
// It calculates the total income and expenses, computes the net balance, and shows a progress bar indicating how close the user is to their savings goal.
