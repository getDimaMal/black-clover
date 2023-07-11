import React from 'react';
import useUserAuth from '@black-clover/front/redux/hooks/useUserAuth';
import { ChangePasswordFormProps } from '@black-clover/front/shared/types/auth.type';
import { ChangePasswordNoTokenDto } from '@black-clover/shared/dto/users/change-password.dto';
import { fireEvent } from '@testing-library/react';

import { customRender } from '../../../test-utils';

import ChangePassword, { ChangePasswordProps } from './ChangePassword';

const mockChangePassword = jest.fn();

jest.mock('@black-clover/front/redux/hooks/useUserAuth', () =>
  jest.fn<Partial<ReturnType<typeof useUserAuth>>, unknown[]>(() => ({
    isLoading: false,
    changePassword: mockChangePassword,
  }))
);
const button = 'change password';
const payload: ChangePasswordNoTokenDto = { password: 'password123' };
const Component: React.FC<ChangePasswordFormProps> = ({ onSubmit }) => (
  <button onClick={() => onSubmit(payload)}>{button}</button>
);

const getProps = (props: Partial<ChangePasswordProps> = {}): ChangePasswordProps => ({
  token: 'some toke',
  children: (p) => <Component {...p} />,
  ...props,
});

describe('ChangePassword', () => {
  it('should render without error', () => {
    const { getByText } = customRender(<ChangePassword {...getProps()} />);

    expect(getByText(button)).toBeInTheDocument();
  });

  it('should call changePassword', () => {
    const props = getProps();
    const { getByText } = customRender(<ChangePassword {...props} />);

    fireEvent.click(getByText(button));

    expect(mockChangePassword).toHaveBeenCalledTimes(1);
    expect(mockChangePassword).toHaveBeenCalledWith({ ...payload, token: props.token });
  });
});
