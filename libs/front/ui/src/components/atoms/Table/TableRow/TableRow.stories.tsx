import { Meta, StoryObj } from '@storybook/react';

import TableCell from '../TableCell/TableCell';

import TableRow, { TableRowProps } from './TableRow';

export default {
  component: TableRow,
} as Meta<TableRowProps>;

type Story = StoryObj<typeof TableRow>;

export const Default: Story = {
  render: (args) => (
    <table style={{ borderCollapse: 'collapse' }}>
      <tbody>
        <TableRow {...args}>
          <TableCell isHeader>Header</TableCell>
          <TableCell isHeader>Another Header</TableCell>
          <TableCell isHeader>One More Header</TableCell>
        </TableRow>
        <TableRow {...args}>
          <TableCell>This is a Cell</TableCell>
          <TableCell>This is a Cell</TableCell>
          <TableCell>This is a Cell</TableCell>
        </TableRow>
        <TableRow {...args}>
          <TableCell>This is a Cell</TableCell>
          <TableCell>This is a Cell</TableCell>
          <TableCell>This is a Cell</TableCell>
        </TableRow>
      </tbody>
    </table>
  ),
};
