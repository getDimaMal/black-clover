import { customRender } from '../../../test-utils';

import Login from './Login';

describe('Login', () => {
  it('should render without error', () => {
    const test = 'test';
    const { getByText } = customRender(<Login>{() => <div>{test}</div>}</Login>);

    expect(getByText(test)).toBeInTheDocument();
  });
});