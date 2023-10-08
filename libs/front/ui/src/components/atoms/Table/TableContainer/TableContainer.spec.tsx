import { customRender } from '../../../../test-utils';

import TableContainer, { TableContainerProps } from './TableContainer';

const cellData = 'Cell Data';
const getProps = (props: Partial<TableContainerProps> = {}): TableContainerProps => ({
  name: 'Landing',
  label: 'Category',
  subLabel: '30 Events',
  children: (
    <tbody>
      <tr>
        <td>{cellData}</td>
      </tr>
    </tbody>
  ),
  ...props,
});

describe('TableContainer', () => {
  it('should render props and children', () => {
    const props = getProps();
    const { getByText } = customRender(<TableContainer {...props} />);

    expect(getByText(props.name)).toBeInTheDocument();
    expect(getByText(props.label)).toBeInTheDocument();
    expect(getByText(props.subLabel)).toBeInTheDocument();
    expect(getByText(cellData)).toBeInTheDocument();
  });
});
