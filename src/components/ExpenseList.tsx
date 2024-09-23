import React from 'react';
import { useBudget } from '../context/BudgetContext';
import '../styles/ExpenseList.css';

const ExpenseList: React.FC<{ onEdit: (id: string) => void }> = ({ onEdit }) => {
  const { expenses, removeExpense } = useBudget();

  return (
    <div className="lista-despesas">
      <h2 className="titulo-lista">Lista de Despesas</h2>
      <ul className="itens-despesas">
        {expenses.map((expense) => (
          <li key={expense.id} className="item-despesa">
            <div className="flex justify-between">
              <div>
                <p className="descricao-despesa">{expense.description}</p>
                <p className="valor-despesa">${expense.amount.toFixed(2)}</p>
                <p className="data-despesa">{new Date(expense.date).toLocaleDateString()}</p>
              </div>
              <div className="botoes-acao">
                <button
                  onClick={() => onEdit(expense.id)}
                  className="botao-editar"
                >
                  Editar
                </button>
                <button
                  onClick={() => removeExpense(expense.id)}
                  className="botao-remover"
                >
                  Remover
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
