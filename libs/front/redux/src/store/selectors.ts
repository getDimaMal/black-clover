import { useAppSelector } from './store';

export const useSelectUsersSignUp = () => useAppSelector((state) => state.users.signUp);
export const useSelectUsersSignIn = () => useAppSelector((state) => state.users.signIn);
