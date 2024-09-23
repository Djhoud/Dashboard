import React, { createContext, useContext, useState, ReactNode } from 'react';

interface BudgetItem {
  id: string;
  amount: number;
  description: string;
  type: 'income' | 'expense';
  date: string;
}

interface BudgetContextType {
  incomes: BudgetItem[];
  expenses: BudgetItem[];
  addIncome: (item: BudgetItem) => void;
  updateIncome: (id: string, updatedItem: Partial<BudgetItem>) => void;
  removeIncome: (id: string) => void;
  addExpense: (item: BudgetItem) => void;
  updateExpense: (id: string, updatedItem: Partial<BudgetItem>) => void; 
  removeExpense: (id: string) => void; 
}

const BudgetContext = createContext<BudgetContextType | undefined>(undefined);

interface BudgetProviderProps {
  children: ReactNode;
}

export const BudgetProvider: React.FC<BudgetProviderProps> = ({ children }) => {
  const [incomes, setIncomes] = useState<BudgetItem[]>([]);
  const [expenses, setExpenses] = useState<BudgetItem[]>([]);

  // Income CRUD Operations
  const addIncome = (item: BudgetItem) => {
    setIncomes((prevIncomes) => [...prevIncomes, item]);
  };

  const updateIncome = (id: string, updatedItem: Partial<BudgetItem>) => {
    setIncomes((prevIncomes) =>
      prevIncomes.map((income) =>
        income.id === id ? { ...income, ...updatedItem } : income
      )
    );
  };

  const removeIncome = (id: string) => {
    setIncomes((prevIncomes) => prevIncomes.filter((income) => income.id !== id));
  };

  // Expense CRUD Operations
  const addExpense = (item: BudgetItem) => {
    setExpenses((prevExpenses) => [...prevExpenses, item]);
  };

  const updateExpense = (id: string, updatedItem: Partial<BudgetItem>) => {
    setExpenses((prevExpenses) =>
      prevExpenses.map((expense) =>
        expense.id === id ? { ...expense, ...updatedItem } : expense
      )
    );
  };

  const removeExpense = (id: string) => {
    setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== id));
  };

  return (
    <BudgetContext.Provider value={{ incomes, expenses, addIncome, updateIncome, removeIncome, addExpense, updateExpense, removeExpense }}>
      {children}
    </BudgetContext.Provider>
  );
};

export const useBudget = () => {
  const context = useContext(BudgetContext);
  if (!context) throw new Error('useBudget must be used within a BudgetProvider');
  return context;
};
