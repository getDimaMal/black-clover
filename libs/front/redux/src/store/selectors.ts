import { useAppSelector } from './store';

// Users
export const useSelectUsersSignUp = () => useAppSelector((state) => state.users.signUp);
export const useSelectUsersSignIn = () => useAppSelector((state) => state.users.signIn);
export const useSelectUsersCheckEmail = () => useAppSelector((state) => state.users.checkEmail);
export const useSelectUsersChangePassword = () => useAppSelector((state) => state.users.changePassword);
