import { customRender } from '../../test-utils';

import Categories from './Categories';

describe('Categories', () => {
  it('should render default', () => {
    const children = 'children';
    const { getByText } = customRender(<Categories>{() => <div>{children}</div>}</Categories>);

    expect(getByText(children)).toBeInTheDocument();
  });
});
