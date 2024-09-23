import React from 'react';
import { useBudget } from '../context/BudgetContext';

const IncomeList: React.FC<{ onEdit: (id: string) => void }> = ({ onEdit }) => {
  const { incomes, removeIncome } = useBudget();

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4">Income List</h2>
      <ul className="space-y-4">
        {incomes.map((income) => (
          <li key={income.id} className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-md">
            <div className="flex justify-between">
              <div>
                <p className="font-semibold">{income.description}</p>
                <p className="text-green-500 font-bold">${income.amount.toFixed(2)}</p>
                <p className="text-xs text-gray-500">{new Date(income.date).toLocaleDateString()}</p>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={() => onEdit(income.id)}
                  className="text-blue-500 hover:text-blue-700"
                  aria-label={`Edit ${income.description}`}
                >
                  Edit
                </button>
                <button
                  onClick={() => removeIncome(income.id)}
                  className="text-red-500 hover:text-red-700"
                  aria-label={`Delete ${income.description}`}
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {incomes.length === 0 && (
        <p className="text-gray-500 dark:text-gray-400 text-center">No income records found.</p>
      )}
    </div>
  );
};

export default IncomeList;
