import React, { useState } from 'react';
import { useBudget } from '../context/BudgetContext';
import '../styles/Income.css';

const Income: React.FC = () => {
  const [amount, setAmount] = useState<number>(0);
  const [description, setDescription] = useState<string>('');
  const { addIncome } = useBudget();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addIncome({ id: Date.now().toString(), amount, description, type: 'income', date: new Date().toISOString() });
    setAmount(0);
    setDescription('');
  };

  return (
    <div className="income-container">
      <h2 className="income-title">Adicionar Renda</h2>
      <form onSubmit={handleSubmit}>
        <div className="income-input">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            placeholder="Valor"
            className="income-input-field"
            required
          />
        </div>
        <div className="income-input">
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Descrição"
            className="income-input-field"
            required
          />
        </div>
        <button type="submit" className="income-button">
          Adicionar Renda
        </button>
      </form>
    </div>
  );
};

export default Income;
