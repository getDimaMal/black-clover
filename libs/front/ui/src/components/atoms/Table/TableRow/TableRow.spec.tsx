import { customRender } from '../../../../test-utils';

import TableRow from './TableRow';

describe('TableRow', () => {
  it('should render', () => {
    const cellData = 'Cell Data';
    const { getByText } = customRender(
      <table>
        <tbody>
          <TableRow>
            <td>{cellData}</td>
          </TableRow>
        </tbody>
      </table>
    );

    expect(getByText(cellData)).toBeInTheDocument();
  });
});
