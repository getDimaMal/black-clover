import { customRender } from '../test-utils';

import PropertiesList from './PropertiesList';

describe('PropertiesList', () => {
  it('should render children', () => {
    const children = 'children';
    const { getByText } = customRender(<PropertiesList>{() => <div>{children}</div>}</PropertiesList>);

    expect(getByText(children)).toBeInTheDocument();
  });
});
