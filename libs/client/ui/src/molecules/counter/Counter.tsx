import React, { FC } from 'react';

import Button from '../../atoms/Button';

export type CounterProps = {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onIncrementByAmount: (amount: number) => void;
};

const Counter: FC<CounterProps> = ({ value, onIncrement, onDecrement }) => {
  return (
    <div>
      <Button label="-" onClick={onDecrement} />
      <span>{value}</span>
      <Button label="+" onClick={onIncrement} />
    </div>
  );
};

export default Counter;
