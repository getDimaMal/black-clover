import * as authHook from '@black-clover/front/api';
import { TokenUserDto } from '@black-clover/shared/dto/users/token-user.dto';

import { customRender } from '../../../test-utils';

import SignIn from './SignIn';

type ResultType = ReturnType<typeof authHook.useSignIn>;

const getResult = (result: Partial<ResultType> = {}): ResultType => ({
  user: null,
  signIn: jest.fn(),
  status: 'idle',
  error: null,
  isLoading: false,
  ...result,
});
jest.mock('@black-clover/front/api', () => ({
  useSignIn: jest.fn<ResultType, unknown[]>(() => getResult()),
}));

describe('SignIn', () => {
  it('should render without error', () => {
    const test = 'test';
    const onSuccess = jest.fn();
    const { getByText } = customRender(<SignIn onSuccess={onSuccess} render={() => <div>{test}</div>} />);

    expect(onSuccess).not.toHaveBeenCalled();
    expect(getByText(test)).toBeInTheDocument();
  });

  it('should call onSuccess', () => {
    jest.spyOn(authHook, 'useSignIn').mockReturnValue(getResult({ user: {} as TokenUserDto, status: 'success' }));

    const onSuccess = jest.fn();
    customRender(<SignIn onSuccess={onSuccess} render={() => <div />} />);

    expect(onSuccess).toHaveBeenCalledTimes(1);
  });
});
