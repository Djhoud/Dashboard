interface BudgetItem {
  id: string;
  amount: number;
  description: string;
  type: 'income' | 'expense';
  date: string;
}

// Add an income or expense to localStorage
export const addBudgetItem = (item: BudgetItem): void => {
  try {
    const budgetItems: BudgetItem[] = JSON.parse(localStorage.getItem('budgetItems') || '[]');
    budgetItems.push(item);
    localStorage.setItem('budgetItems', JSON.stringify(budgetItems));
  } catch (error) {
    console.error('Failed to add budget item:', error);
  }
};

// Get all budget items (income and expenses) from localStorage
export const getBudgetItems = (): BudgetItem[] => {
  try {
    return JSON.parse(localStorage.getItem('budgetItems') || '[]');
  } catch (error) {
    console.error('Failed to get budget items:', error);
    return [];
  }
};

// Remove a budget item
export const removeBudgetItem = (id: string): void => {
  try {
    let budgetItems: BudgetItem[] = JSON.parse(localStorage.getItem('budgetItems') || '[]');
    budgetItems = budgetItems.filter((item: BudgetItem) => item.id !== id);
    localStorage.setItem('budgetItems', JSON.stringify(budgetItems));
  } catch (error) {
    console.error('Failed to remove budget item:', error);
  }
};

// Get totals for income, expenses, and balance
export const getBudgetSummary = (): { totalIncome: number; totalExpenses: number; balance: number } => {
  try {
    const budgetItems: BudgetItem[] = getBudgetItems();

    const totalIncome = budgetItems
      .filter(item => item.type === 'income')
      .reduce((sum, item) => sum + item.amount, 0);

    const totalExpenses = budgetItems
      .filter(item => item.type === 'expense')
      .reduce((sum, item) => sum + item.amount, 0);

    return {
      totalIncome,
      totalExpenses,
      balance: totalIncome - totalExpenses
    };
  } catch (error) {
    console.error('Failed to get budget summary:', error);
    return { totalIncome: 0, totalExpenses: 0, balance: 0 };
  }
};