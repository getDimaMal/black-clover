import { customRender, screen } from '../../../test-utils';

import CategoryTable, { CategoryTableProps } from './CategoryTable';

const getProps = ({ ...props }: Partial<CategoryTableProps> = {}): CategoryTableProps => ({
  name: 'Landing',
  label: 'Category',
  subLabel: '300 events',
  columns: ['one', 'two'],
  head: { one: 'One', two: 'Two' },
  body: [
    { one: '1.1 Cell', two: '1.2 Cell' },
    { one: '2.1 Cell', two: '2.2 Cell' },
  ],
  ...props,
});

describe('CategoryTable', () => {
  it('should render without error', () => {
    const props = getProps();
    customRender(<CategoryTable {...props} />);

    expect(screen.getByText(props.name)).toBeInTheDocument();
    expect(screen.getByText(props.label)).toBeInTheDocument();
    expect(screen.getByText(props.subLabel)).toBeInTheDocument();

    expect(screen.getByRole('columnheader', { name: 'One' }));
    expect(screen.getByRole('columnheader', { name: 'Two' }));
    expect(screen.getByRole('cell', { name: '1.1 Cell' }));
    expect(screen.getByRole('cell', { name: '1.2 Cell' }));
    expect(screen.getByRole('cell', { name: '2.1 Cell' }));
    expect(screen.getByRole('cell', { name: '2.2 Cell' }));
  });
});
