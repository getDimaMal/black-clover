import { customRender } from '../../../test-utils';

import ChangePassword from './ChangePassword';

describe('ChangePassword', () => {
  it('should render without error', () => {
    const test = 'test component';
    const { getByText } = customRender(<ChangePassword>{() => <div>{test}</div>}</ChangePassword>);

    expect(getByText(test)).toBeInTheDocument();
  });
});
