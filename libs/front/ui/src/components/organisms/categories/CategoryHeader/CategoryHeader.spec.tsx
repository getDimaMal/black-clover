import { customRender, fireEvent } from '../../../../test-utils';

import CategoryHeader, { CategoryHeaderProps } from './CategoryHeader';

const getProps = (props: Partial<CategoryHeaderProps> = {}): CategoryHeaderProps => ({
  name: 'Name',
  Search: 'Search',
  Filters: 'Filters',
  Modal: 'Modal',
  ...props,
});

describe('CategoryHeader', () => {
  it('should render default', () => {
    const props = getProps();
    const { getByText, getByRole } = customRender(<CategoryHeader {...props} />);

    expect(getByText(props.name)).toBeInTheDocument();
    expect(getByText(String(props.Search))).toBeInTheDocument();
    expect(getByText(String(props.Filters))).toBeInTheDocument();

    expect(getByRole('button', { name: 'New Event' })).toBeInTheDocument();
    expect(getByRole('button', { name: 'New Category' })).toBeInTheDocument();
  });

  describe('Modal', () => {
    it('render on "New Event" click', () => {
      const props = getProps();
      const { getByText, getByRole, queryByText } = customRender(<CategoryHeader {...props} />);

      expect(queryByText(String(props.Modal))).not.toBeInTheDocument();

      fireEvent.click(getByRole('button', { name: 'New Event' }));
      expect(getByText(String(props.Modal))).toBeInTheDocument();
    });

    it('render on "New Category" click', () => {
      const props = getProps();
      const { getByText, getByRole, queryByText } = customRender(<CategoryHeader {...props} />);

      expect(queryByText(String(props.Modal))).not.toBeInTheDocument();

      fireEvent.click(getByRole('button', { name: 'New Category' }));
      expect(getByText(String(props.Modal))).toBeInTheDocument();
    });
  });
});
