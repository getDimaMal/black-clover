import { customRender, fireEvent } from '../../../../test-utils';

import EventsHeader, { CategoryHeaderProps } from './EventsHeader';

const getProps = (props: Partial<CategoryHeaderProps> = {}): CategoryHeaderProps => ({
  name: 'Name',
  Search: 'Search',
  Filters: 'Filters',
  onCreateEventClick: jest.fn(),
  onCreateCategoryClick: jest.fn(),
  ...props,
});

describe('EventsHeader', () => {
  it('should render default', () => {
    const props = getProps();
    const { getByText, getByRole } = customRender(<EventsHeader {...props} />);

    expect(getByText(props.name)).toBeInTheDocument();
    expect(getByText(String(props.Search))).toBeInTheDocument();
    expect(getByText(String(props.Filters))).toBeInTheDocument();

    expect(getByRole('button', { name: 'New Event' })).toBeInTheDocument();
    expect(getByRole('button', { name: 'New Category' })).toBeInTheDocument();
  });

  it('should call onCreateEventClick', () => {
    const props = getProps();
    const { getByRole } = customRender(<EventsHeader {...props} />);

    fireEvent.click(getByRole('button', { name: 'New Event' }));
    expect(props.onCreateEventClick).toHaveBeenCalledTimes(1);
  });

  it('should call onCreateCategoryClick', () => {
    const props = getProps();
    const { getByRole } = customRender(<EventsHeader {...props} />);

    fireEvent.click(getByRole('button', { name: 'New Category' }));
    expect(props.onCreateCategoryClick).toHaveBeenCalledTimes(1);
  });
});
