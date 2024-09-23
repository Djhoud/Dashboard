import React, { useState } from 'react';

interface ExpenseFormProps {
  initialAmount?: number;
  initialDescription?: string;
  onSubmit: (amount: number, description: string) => void;
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({ initialAmount = 0, initialDescription = '', onSubmit }) => {
  const [amount, setAmount] = useState<number>(initialAmount);
  const [description, setDescription] = useState<string>(initialDescription);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(amount, description);
    setAmount(0);
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white dark:bg-neutral-800 rounded-lg shadow-md">
      <div className="mb-2">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          placeholder="Amount"
          className="border p-2 w-full"
          required
        />
      </div>
      <div className="mb-2">
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="border p-2 w-full"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        {initialAmount ? 'Update Expense' : 'Add Expense'}
      </button>
    </form>
  );
};

export default ExpenseForm;
