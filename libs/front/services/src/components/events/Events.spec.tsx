import { customRender } from '../../test-utils';

import Events from './Events';

describe('Events', () => {
  it('should render default', () => {
    const children = 'children';
    const { getByText } = customRender(<Events>{() => <div>{children}</div>}</Events>);

    expect(getByText(children)).toBeInTheDocument();
  });
});
