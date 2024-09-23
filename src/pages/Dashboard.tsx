import React, { useState } from 'react';
import DashboardLayout from '../components/dashlayout';
import IncomeExpenseTable from '../components/IncomeExpenseTable';
import IncomeForm from '../components/IncomeForm';
import Modal from '../components/Modal';
import SummaryCard from '../components/SummaryCard';
import { useBudget } from '../context/BudgetContext';
import { calculatePercentageChange, determineChangeType } from '../utils/calculateChange';

const Dashboard: React.FC = () => {
  const { incomes, expenses } = useBudget();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const totalRendimentos = incomes.reduce((sum, income) => sum + income.amount, 0);
  const totalDespesas = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const saldo = totalRendimentos - totalDespesas;

  const rendimentosSemanaAnterior = 500; 
  const despesasSemanaAnterior = 400;
  const saldoSemanaAnterior = rendimentosSemanaAnterior - despesasSemanaAnterior;

  const handleSubmit = (amount: number, description: string) => {
    setIsModalOpen(false);
    // Aqui você deve adicionar a lógica para armazenar a nova transação
  };

  return (
    <DashboardLayout>
      <div className="dashboardContainer">
        <h1 className="dashboardHeader">Gerenciador de Orçamentos e Despesas</h1>

        <div className="gridContainer">
          <SummaryCard
            title="Total de Rendimentos"
            value={totalRendimentos}
            change={calculatePercentageChange(totalRendimentos, rendimentosSemanaAnterior)}
            changeType={determineChangeType(totalRendimentos, rendimentosSemanaAnterior)}
            lastWeekValue={rendimentosSemanaAnterior}
            iconColor="bg-gray-500"
          />
          <SummaryCard
            title="Total de Despesas"
            value={totalDespesas}
            change={calculatePercentageChange(totalDespesas, despesasSemanaAnterior)}
            changeType={determineChangeType(totalDespesas, despesasSemanaAnterior)}
            lastWeekValue={despesasSemanaAnterior}
            iconColor="bg-red-500"
          />
          <SummaryCard
            title="Saldo"
            value={saldo}
            change={calculatePercentageChange(saldo, saldoSemanaAnterior)}
            changeType={determineChangeType(saldo, saldoSemanaAnterior)}
            lastWeekValue={saldoSemanaAnterior}
            iconColor="bg-green-500"
          />
        </div>

        <IncomeExpenseTable />

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Adicionar Transação">
          <IncomeForm
            initialAmount={0}
            initialDescription=""
            onSubmit={handleSubmit}
          />
        </Modal>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
