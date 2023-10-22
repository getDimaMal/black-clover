import { customRender } from '../../../../test-utils';

import AuthLayout from './AuthLayout';

describe('AuthLayout', () => {
  it('should render default', () => {
    const label = 'label';
    const children = 'children';
    const { getByText } = customRender(<AuthLayout label={label}>{children}</AuthLayout>);

    expect(getByText(label)).toBeInTheDocument();
    expect(getByText(children)).toBeInTheDocument();
  });
});
