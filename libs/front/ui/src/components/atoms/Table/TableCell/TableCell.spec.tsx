import { customRender } from '../../../../test-utils';

import TableCell, { TableCellProps } from './TableCell';

const cellData = 'Some Cell Data';

const getProps = (props: Partial<TableCellProps> = {}): TableCellProps => ({
  children: cellData,
  ...props,
});

describe('TableCell', () => {
  it('should render children', () => {
    const { getByText } = customRender(
      <table>
        <tbody>
          <tr>
            <TableCell {...getProps()} />
          </tr>
        </tbody>
      </table>
    );

    expect(getByText(cellData)).toBeInTheDocument();
  });

  it('should have .header class when isHeader', () => {
    const { getByText } = customRender(
      <table>
        <thead>
          <tr data-testid={'row'}>
            <TableCell {...getProps({ isHeader: true })} />
          </tr>
        </thead>
      </table>
    );
    expect(getByText(cellData).className).toContain('header');
  });
});
