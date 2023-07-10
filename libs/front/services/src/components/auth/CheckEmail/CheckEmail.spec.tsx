import { customRender } from '../../../test-utils';

import CheckEmail from './CheckEmail';

describe('CheckEmail', () => {
  it('should redner without error', () => {
    const test = 'test';
    const { getByText } = customRender(<CheckEmail>{() => <span>{test}</span>}</CheckEmail>);

    expect(getByText(test)).toBeInTheDocument();
  });
});
