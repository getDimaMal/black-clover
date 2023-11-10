import { customRender } from '../../test-utils';

import EventsList from './EventsList';

describe('EventsList', () => {
  it('should render default', () => {
    const children = 'children';
    const { getByText } = customRender(<EventsList>{() => <div>{children}</div>}</EventsList>);

    expect(getByText(children)).toBeInTheDocument();
  });
});
