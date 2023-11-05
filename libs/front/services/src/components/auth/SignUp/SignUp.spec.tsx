import React from 'react';
import * as authHook from '@black-clover/front/api';
import { TokenUserDto } from '@black-clover/shared/dto/users/token-user.dto';

import { customRender } from '../../../test-utils';

import SignUp from './SignUp';

type ResultType = ReturnType<typeof authHook.useSignUp>;

const getResult = (result: Partial<ResultType> = {}): ResultType => ({
  user: null,
  signUp: jest.fn(),
  status: 'idle',
  error: null,
  isLoading: false,
  ...result,
});
jest.mock('@black-clover/front/api', () => ({
  useSignUp: jest.fn<ResultType, unknown[]>(() => getResult()),
}));

describe('SignUp', () => {
  it('should render default', () => {
    const test = 'test';
    const onSuccess = jest.fn();
    const { getByText } = customRender(<SignUp onSuccess={onSuccess} render={() => <div>{test}</div>} />);

    expect(onSuccess).not.toHaveBeenCalled();
    expect(getByText(test)).toBeInTheDocument();
  });

  it('should call onSuccess', () => {
    jest.spyOn(authHook, 'useSignUp').mockReturnValue(getResult({ user: {} as TokenUserDto, status: 'success' }));

    const onSuccess = jest.fn();
    customRender(<SignUp onSuccess={onSuccess} render={() => <div />} />);

    expect(onSuccess).toHaveBeenCalledTimes(1);
  });
});
