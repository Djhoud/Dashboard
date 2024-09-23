export const calculatePercentageChange = (current: number, previous: number): number => {
    if (previous === 0) return 100; // Avoid division by zero
    return ((current - previous) / previous) * 100;
  };
  
  export const determineChangeType = (current: number, previous: number): 'increase' | 'decrease' => {
    return current >= previous ? 'increase' : 'decrease';
  };
  