import { customRender } from '../../../../test-utils';

import CategoryHeader, { CategoryHeaderProps } from './CategoryHeader';

const getProps = (props: Partial<CategoryHeaderProps> = {}): CategoryHeaderProps => ({
  name: 'Workspace name',
  ...props,
});

describe('CategoryHeader', () => {
  it('should render default', () => {
    const props = getProps();
    const { getByText, getByRole } = customRender(<CategoryHeader {...props} />);

    expect(getByText(props.name)).toBeInTheDocument();
    expect(getByRole('button', { name: 'New Event' })).toBeInTheDocument();
    expect(getByRole('button', { name: 'New Category' })).toBeInTheDocument();
  });
});