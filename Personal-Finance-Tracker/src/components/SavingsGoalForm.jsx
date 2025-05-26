import React, { useState } from 'react';

const SavingsGoalForm = ({ onSetGoal }) => {
  const [goal, setGoal] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!goal || isNaN(goal)) return;

    onSetGoal(parseFloat(goal));
    setGoal('');
  };

  return (
    <form className="goal-form" onSubmit={handleSubmit}>
      <h3>Set Savings Goal</h3>
      <input
        type="number"
        placeholder="Enter savings goal"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
      />
      <button type="submit">Update Goal</button>
    </form>
  );
};

export default SavingsGoalForm;
