import { customRender } from '../../../test-utils';

import ResetPassword from './ResetPassword';

describe('ResetPassword', () => {
  it('should redner without error', () => {
    const test = 'test';
    const { getByText } = customRender(
      <ResetPassword changePasswordLink="link">{() => <span>{test}</span>}</ResetPassword>
    );

    expect(getByText(test)).toBeInTheDocument();
  });
});
