import { customRender } from '../../../../test-utils';

import EventsTable, { CategoriesTableProps } from './EventsTable';

const event: CategoriesTableProps['events'][0] = {
  name: 'Share Button Tap',
  description: 'A share button has been tapped',
  parameters: ['available_auth_services: [String]'],
  sources: ['Android'],
  tags: ['Generated'],
};

const getProps = (props: Partial<CategoriesTableProps> = {}): CategoriesTableProps => ({
  name: 'Landing',
  eventsCount: 12,
  columns: ['name', 'parameters', 'sources', 'tags'],
  columnsName: { name: 'Name', parameters: 'Parameters', sources: 'Sources', tags: 'Tags' },
  events: [event],
  ...props,
});

describe('EventsTable', () => {
  it('should render default', () => {
    const props = getProps();
    const { getByText } = customRender(<EventsTable {...props} />);

    expect(getByText('Category')).toBeInTheDocument();
    expect(getByText(props.name)).toBeInTheDocument();
    expect(getByText(`${props.eventsCount} events`)).toBeInTheDocument();

    Object.values(props.columnsName).forEach((name) => expect(getByText(name)).toBeInTheDocument());

    expect(getByText(event.name)).toBeInTheDocument();
    expect(getByText(event.description)).toBeInTheDocument();
    expect(getByText(event.parameters[0])).toBeInTheDocument();
    expect(getByText(event.sources[0])).toBeInTheDocument();
    expect(getByText(event.tags[0])).toBeInTheDocument();
  });
});
