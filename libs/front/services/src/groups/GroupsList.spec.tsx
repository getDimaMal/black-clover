import { customRender } from '../test-utils';

import GroupsList from './GroupsList';

describe('GroupsList', () => {
  it('should render children', () => {
    const children = 'children';
    const { getByText } = customRender(<GroupsList>{() => <div>{children}</div>}</GroupsList>);

    expect(getByText(children)).toBeInTheDocument();
  });
});
