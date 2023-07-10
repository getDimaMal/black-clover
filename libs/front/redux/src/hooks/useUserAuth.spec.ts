import { CheckEmailDto } from '@black-clover/shared/dto/users/check-email.dto';
import { CreateUserDto } from '@black-clover/shared/dto/users/create-user.dto';
import { act } from '@testing-library/react';

import * as usersCheckEmail from '../state/users/checkEmail';
import * as usersSignIn from '../state/users/signIn';
import * as usersSignUp from '../state/users/signUp';
import { customRenderHook } from '../test-utils';

import useUserAuth from './useUserAuth';

const user: CreateUserDto = { email: 'mail@mail.com', password: 'password123' };

describe('useUserSignRequests', () => {
  it('should call action signUp', async () => {
    const mockSignUp = jest.spyOn(usersSignUp, 'signUp');
    const mockSignUpClear = jest.spyOn(usersSignUp, 'signUpClear');

    const { result } = customRenderHook(() => useUserAuth());
    await act(() => result.current.signUp(user));

    expect(mockSignUp).toHaveBeenCalledTimes(1);
    expect(mockSignUp).toHaveBeenCalledWith(user);
    expect(mockSignUpClear).toHaveBeenCalledTimes(1);
  });

  it('should call action signIn', async () => {
    const mockSignIn = jest.spyOn(usersSignIn, 'signIn');
    const mockSignInClear = jest.spyOn(usersSignIn, 'signInClear');

    const { result } = customRenderHook(() => useUserAuth());
    await act(() => result.current.signIn(user));

    expect(mockSignIn).toHaveBeenCalledTimes(1);
    expect(mockSignIn).toHaveBeenCalledWith(user);
    expect(mockSignInClear).toHaveBeenCalledTimes(1);
  });

  it('should call action checkEmail', async () => {
    const mockCheckEmail = jest.spyOn(usersCheckEmail, 'checkEmail');
    const mockCheckEmailClear = jest.spyOn(usersCheckEmail, 'checkEmailClear');
    const body: CheckEmailDto = { email: 'check@mail.com' };

    const { result } = customRenderHook(() => useUserAuth());
    await act(() => result.current.checkEmail(body));

    expect(mockCheckEmail).toHaveBeenCalledTimes(1);
    expect(mockCheckEmail).toHaveBeenCalledWith(body);
    expect(mockCheckEmailClear).toHaveBeenCalledTimes(1);
  });
});