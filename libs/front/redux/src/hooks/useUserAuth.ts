import { useMemo } from 'react';
import { Statuses } from '@black-clover/front/shared/types/base.type';
import { CheckEmailDto } from '@black-clover/shared/dto/users/check-email.dto';
import { CreateUserDto } from '@black-clover/shared/dto/users/create-user.dto';

import { checkEmail, checkEmailClear } from '../state/users/checkEmail';
import { signIn, signInClear } from '../state/users/signIn';
import { signUp, signUpClear } from '../state/users/signUp';
import { useSelectUsersCheckEmail, useSelectUsersSignIn, useSelectUsersSignUp } from '../store/selectors';
import { useAppDispatch } from '../store/store';

const useUserAuth = () => {
  const usersSignUp = useSelectUsersSignUp();
  const usersSignIn = useSelectUsersSignIn();
  const usersCheckEmail = useSelectUsersCheckEmail();

  const dispatch = useAppDispatch();

  const user = useMemo(() => {
    return usersSignUp.response || usersSignIn.response;
  }, [usersSignUp.response, usersSignIn.response]);

  const error = useMemo(() => {
    return usersSignUp.error?.message || usersSignIn.error?.message;
  }, [usersSignUp.error, usersSignIn.error]);

  const isLoading = useMemo(() => {
    return [usersSignUp.status, usersSignIn.status].includes(Statuses.pending);
  }, [usersSignUp.status, usersSignIn.status]);

  const clear = () => {
    dispatch(signUpClear());
    dispatch(signInClear());
    dispatch(checkEmailClear());
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

  return {
    user,
    error,
    isLoading,
    signUp: handleSignUp,
    signIn: handleSignIn,
    checkEmail: handleCheckEmail,
    token: (usersCheckEmail.response as { token: string })?.token,
  };
};

export default useUserAuth;
