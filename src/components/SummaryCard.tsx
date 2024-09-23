import React from 'react';
import { SummaryCardProps } from '../lib/types';

const SummaryCard: React.FC<SummaryCardProps> = ({ title, value, change, changeType, lastWeekValue, iconColor }) => {
  return (
    <div className="flex flex-col gap-y-3 p-4 bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-800">
      <div className="flex items-center">
        <span className={`size-2 inline-block ${iconColor} rounded-full mr-2`}></span>
        <span className="text-xs font-semibold uppercase text-gray-600 dark:text-neutral-400">{title}</span>
      </div>

      <div className="text-center">
        <h3 className="text-3xl font-semibold text-gray-800 dark:text-neutral-200">
          R$ {value.toFixed(2)} {/* Adicionado o símbolo R$ aqui */}
        </h3>
      </div>

      <div className="flex justify-between items-center text-sm text-gray-600 dark:text-neutral-400">
        <div>
          <span className={changeType === 'increase' ? 'text-green-600' : 'text-red-600'}>
            {change.toFixed(2)}%
          </span>
          <span className="block">mudança</span>
        </div>
       
      </div>
    </div>
  );
};

export default SummaryCard;
