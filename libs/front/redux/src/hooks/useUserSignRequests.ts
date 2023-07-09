import { Statuses } from '@black-clover/front/shared/types/base.type';
import { CreateUserDto } from '@black-clover/shared/dto/users/create-user.dto';

import { signIn, signInClear } from '../state/users/signIn';
import { signUp, signUpClear } from '../state/users/signUp';
import { useSelectUsersSignIn, useSelectUsersSignUp } from '../store/selectors';
import { useAppDispatch } from '../store/store';

const useUserSignRequests = () => {
  const usersSignUp = useSelectUsersSignUp();
  const usersSignIn = useSelectUsersSignIn();

  const dispatch = useAppDispatch();

  const clear = () => {
    dispatch(signUpClear());
    dispatch(signInClear());
  };

  const handleSignUp = (body: CreateUserDto) => {
    clear();
    dispatch(signUp(body));
  };

  const handleSignIn = (body: CreateUserDto) => {
    clear();
    dispatch(signIn(body));
  };

  return {
    signUp: handleSignUp,
    signIn: handleSignIn,
    user: usersSignUp.response || usersSignIn.response,
    error: usersSignUp.error?.message || usersSignIn.error?.message,
    isLoading: [usersSignUp.status, usersSignIn.status].includes(Statuses.pending),
  };
};

export default useUserSignRequests;
