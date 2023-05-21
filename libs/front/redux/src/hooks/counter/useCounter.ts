import { decrement, increment, incrementByAmount } from '../../state/counter/counterSlice';
import { useSelectCounter } from '../../store/selectors';
import { useAppDispatch } from '../../store/store';

export const useCounter = () => {
  const counter = useSelectCounter();
  // TODO describe `useAppDispatchFn(increment)` to replace `() => dispatch(increment())`
  const dispatch = useAppDispatch();

  return {
    counter,
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    incrementByAmount: (amount: number) => dispatch(incrementByAmount(amount)),
  };
};
