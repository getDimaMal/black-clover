import { FC, ReactElement } from 'react';
import { useCounter } from '@black-clover/front/redux/hooks/counter/useCounter';

export type CounterProps = {
  Content: (props: {
    value: number;
    onIncrement: () => void;
    onDecrement: () => void;
    onIncrementByAmount: (amount: number) => void;
  }) => ReactElement;
};

const Counter: FC<CounterProps> = ({ Content }) => {
  const { counter, increment, decrement, incrementByAmount } = useCounter();

  return Content({
    value: counter.value,
    onIncrement: increment,
    onDecrement: decrement,
    onIncrementByAmount: incrementByAmount,
  });
};

export default Counter;
