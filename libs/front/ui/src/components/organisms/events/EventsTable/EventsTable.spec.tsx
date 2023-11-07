import { customRender } from '../../../../test-utils';

import { columns, columnsName, getEventsList } from './__test-data__';
import EventsTable, { CategoriesTableProps } from './EventsTable';

const events = getEventsList(3);

const getProps = (props: Partial<CategoriesTableProps> = {}): CategoriesTableProps => ({
  events,
  columns,
  columnsName,
  name: 'Landing',
  ...props,
});

describe('EventsTable', () => {
  it('should render default', () => {
    const props = getProps();
    const { getByText, getAllByText } = customRender(<EventsTable {...props} />);

    expect(getByText('Category')).toBeInTheDocument();
    expect(getByText(props.name)).toBeInTheDocument();
    expect(getByText(`${props.events.length} events`)).toBeInTheDocument();

    Object.values(props.columnsName).forEach((name) => expect(getByText(name)).toBeInTheDocument());

    expect(getAllByText(events[0].name)[0]).toBeInTheDocument();
    expect(getAllByText(events[0].description)[0]).toBeInTheDocument();
    expect(getAllByText(events[0].parameters[0])[0]).toBeInTheDocument();
    expect(getAllByText(events[0].sources[0])[0]).toBeInTheDocument();
    expect(getAllByText(events[0].tags[0])[0]).toBeInTheDocument();
  });

  it('should render "No Events Yet" when the events list is empty.', () => {
    const { getByText } = customRender(<EventsTable {...getProps({ events: getEventsList(0) })} />);

    expect(getByText('No Events Yet')).toBeInTheDocument();
  });

  it.each<number>([0, 1])('should NOT render eventsCount when: %s', (count) => {
    const props = getProps({ events: getEventsList(count) });
    const { queryByText } = customRender(<EventsTable {...props} />);

    expect(queryByText(`${props.events.length} events`)).not.toBeInTheDocument();
  });
});
