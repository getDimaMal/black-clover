import { useAppSelector } from './store';

export const useSelectCounter = () => useAppSelector((state) => state.counter);
