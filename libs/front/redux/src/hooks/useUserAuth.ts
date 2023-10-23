import { useMemo } from 'react';
import { Statuses } from '@black-clover/front/shared/types/base.type';
import { ChangePasswordDto } from '@black-clover/shared/dto/users/change-password.dto';
import { CheckEmailDto } from '@black-clover/shared/dto/users/check-email.dto';
import { CreateUserDto } from '@black-clover/shared/dto/users/create-user.dto';
import { TokenUserDto } from '@black-clover/shared/dto/users/token-user.dto';

import { changePassword, changePasswordClear } from '../state/users/changePassword';
import { checkEmail, checkEmailClear } from '../state/users/checkEmail';
import { signIn, signInClear } from '../state/users/signIn';
import { signUp, signUpClear } from '../state/users/signUp';
import {
  useSelectUsersChangePassword,
  useSelectUsersCheckEmail,
  useSelectUsersSignIn,
  useSelectUsersSignUp,
} from '../store/selectors';
import { useAppDispatch } from '../store/store';

const useUserAuth = () => {
  const usersSignUp = useSelectUsersSignUp();
  const usersSignIn = useSelectUsersSignIn();
  const usersCheckEmail = useSelectUsersCheckEmail();
  const usersChangePassword = useSelectUsersChangePassword();

  const dispatch = useAppDispatch();

  const user = useMemo(() => {
    return (usersSignUp.response || usersSignIn.response || usersChangePassword.response) as TokenUserDto;
  }, [usersSignUp.response, usersSignIn.response, usersChangePassword.response]);

  const error = useMemo(() => {
    return (
      usersSignUp.error?.message ||
      usersSignIn.error?.message ||
      usersCheckEmail.error?.message ||
      usersChangePassword.error?.message ||
      null
    );
  }, [
    usersSignUp.error?.message,
    usersSignIn.error?.message,
    usersCheckEmail.error?.message,
    usersChangePassword.error?.message,
  ]);

  const isLoading = useMemo(() => {
    return [usersSignUp.status, usersSignIn.status, usersCheckEmail.status, usersChangePassword.status].includes(
      Statuses.pending
    );
  }, [usersSignUp.status, usersSignIn.status, usersCheckEmail.status, usersChangePassword.status]);

  const clear = () => {
    dispatch(signUpClear());
    dispatch(signInClear());
    dispatch(checkEmailClear());
    dispatch(changePasswordClear());
  };

  const handleSignUp = (body: CreateUserDto) => {
    clear();
    dispatch(signUp(body));
  };

  const handleSignIn = (body: CreateUserDto) => {
    clear();
    dispatch(signIn(body));
  };

  const handleCheckEmail = (body: CheckEmailDto) => {
    clear();
    dispatch(checkEmail(body));
  };

  const handleChangePassword = (body: ChangePasswordDto) => {
    clear();
    dispatch(changePassword(body));
  };

  return {
    user,
    error,
    isLoading,
    clear,
    signUp: handleSignUp,
    signIn: handleSignIn,
    checkEmail: handleCheckEmail,
    changePassword: handleChangePassword,
    token: (usersCheckEmail.response as { token: string })?.token,
  };
};

export default useUserAuth;
