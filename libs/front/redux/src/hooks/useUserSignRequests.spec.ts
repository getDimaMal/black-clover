import { CreateUserDto } from '@black-clover/shared/dto/users/create-user.dto';
import { act } from '@testing-library/react';

import * as usersSignIn from '../state/users/signIn';
import * as usersSignUp from '../state/users/signUp';
import { customRenderHook } from '../test-utils';

import useUserSignRequests from './useUserSignRequests';

const user: CreateUserDto = { email: 'mail@mail.com', password: 'password123' };

describe('useUserSignRequests', () => {
  it('should call action signUp', async () => {
    const mockSignUp = jest.spyOn(usersSignUp, 'signUp');
    const mockSignUpClear = jest.spyOn(usersSignUp, 'signUpClear');

    const { result } = customRenderHook(() => useUserSignRequests());
    await act(() => result.current.signUp(user));

    expect(mockSignUp).toHaveBeenCalledTimes(1);
    expect(mockSignUp).toHaveBeenCalledWith(user);
    expect(mockSignUpClear).toHaveBeenCalledTimes(1);
  });

  it('should call action signIn', async () => {
    const mockSignIn = jest.spyOn(usersSignIn, 'signIn');
    const mockSignInClear = jest.spyOn(usersSignIn, 'signInClear');

    const { result } = customRenderHook(() => useUserSignRequests());
    await act(() => result.current.signIn(user));

    expect(mockSignIn).toHaveBeenCalledTimes(1);
    expect(mockSignIn).toHaveBeenCalledWith(user);
    expect(mockSignInClear).toHaveBeenCalledTimes(1);
  });
});
