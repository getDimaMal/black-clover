import { customRender } from '../../test-utils';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  it('should render without error', () => {
    const { getByText } = customRender(<LoginForm>{() => <div>test</div>}</LoginForm>);
    expect(getByText('test')).toBeDefined();
  });
});
