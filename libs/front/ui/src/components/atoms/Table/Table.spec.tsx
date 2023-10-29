import { customRender } from '../../../test-utils';

import Table, { TableProps } from './Table';

const getProps = (props: Partial<TableProps> = {}): Omit<TableProps, 'children'> => ({
  HeaderLeft: 'HeaderLeft',
  HeaderRight: 'HeaderRight',
  ...props,
});

describe('Table', () => {
  it('should render default', () => {
    const columnHeader = 'Column Header';
    const cellData = 'Cell Data';
    const props = getProps();

    const { getByText, getAllByText } = customRender(
      <Table {...props}>
        <thead>
          <Table.TableRow>
            <Table.TableCell isHeader>{columnHeader}</Table.TableCell>
            <Table.TableCell isHeader>{columnHeader}</Table.TableCell>
            <Table.TableCell isHeader>{columnHeader}</Table.TableCell>
            <Table.TableCell isHeader>{columnHeader}</Table.TableCell>
          </Table.TableRow>
        </thead>
        <tbody>
          <Table.TableRow>
            <Table.TableCell>{cellData}</Table.TableCell>
            <Table.TableCell>{cellData}</Table.TableCell>
            <Table.TableCell>{cellData}</Table.TableCell>
            <Table.TableCell>{cellData}</Table.TableCell>
          </Table.TableRow>
          <Table.TableRow>
            <Table.TableCell>{cellData}</Table.TableCell>
            <Table.TableCell>{cellData}</Table.TableCell>
            <Table.TableCell>{cellData}</Table.TableCell>
            <Table.TableCell>{cellData}</Table.TableCell>
          </Table.TableRow>
        </tbody>
      </Table>
    );

    expect(getByText(String(props.HeaderLeft))).toBeInTheDocument();
    expect(getByText(String(props.HeaderRight))).toBeInTheDocument();

    expect(getAllByText(columnHeader).length).toBe(4);
    expect(getAllByText(cellData).length).toBe(8);
  });
});
