export interface BudgetItem {
    id: string;
    amount: number;
    description: string;
    type: 'income' | 'expense';
    date: string;
  }
  