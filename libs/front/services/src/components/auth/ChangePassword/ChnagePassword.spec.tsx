import React from 'react';
import { useChangePassword } from '@black-clover/front/api';
import * as authHook from '@black-clover/front/api';
import { fireEvent } from '@black-clover/front/ui/test-utils';
import { TokenUserDto } from '@black-clover/shared/dto/users/token-user.dto';

import { customRender } from '../../../test-utils';

import ChangePassword, { ChangePasswordProps } from './ChangePassword';

type ResultType = ReturnType<typeof authHook.useChangePassword>;

const mockChangePassword = jest.fn();
const getResult = (result: Partial<ResultType> = {}): ResultType => ({
  user: null,
  error: null,
  status: 'idle',
  isLoading: false,
  changePassword: mockChangePassword,
  ...result,
});

jest.mock('@black-clover/front/api', () => ({
  useChangePassword: jest.fn<ReturnType<typeof useChangePassword>, unknown[]>(() => getResult()),
}));

const token = 'token';
const children = 'children';
const getProps = (props: Partial<ChangePasswordProps> = {}): ChangePasswordProps => ({
  token,
  onSuccess: jest.fn(),
  render: () => <div>{children}</div>,
  ...props,
});

describe('ChangePassword', () => {
  it('should render without error', () => {
    const props = getProps();
    const { getByText } = customRender(<ChangePassword {...props} />);

    expect(props.onSuccess).not.toHaveBeenCalled();
    expect(getByText(children)).toBeInTheDocument();
  });

  it('should call changePassword with a token', () => {
    const { getByRole } = customRender(<ChangePassword {...getProps()} />);

    fireEvent.submit(getByRole('form'));

    expect(mockChangePassword).toHaveBeenCalledTimes(1);
    expect(mockChangePassword).toHaveBeenCalledWith({ token, password: '' });
  });

  it('should call onSuccess', () => {
    jest
      .spyOn(authHook, 'useChangePassword')
      .mockReturnValue(getResult({ user: {} as TokenUserDto, status: 'success' }));

    const props = getProps();
    customRender(<ChangePassword {...props} />);

    expect(props.onSuccess).toHaveBeenCalledTimes(1);
  });
});
