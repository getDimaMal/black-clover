import { customRender } from '../test-utils';

import CategoriesList from './CategoriesList';

describe('CategoriesList', () => {
  it('should render children', () => {
    const children = 'children';
    const { getByText } = customRender(<CategoriesList>{() => <div>{children}</div>}</CategoriesList>);

    expect(getByText(children)).toBeInTheDocument();
  });
});
