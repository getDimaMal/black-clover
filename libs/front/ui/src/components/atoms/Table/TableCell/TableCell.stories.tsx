import { Meta, StoryObj } from '@storybook/react';

import TableCell, { TableCellProps } from './TableCell';

export default {
  component: TableCell,
} as Meta<TableCellProps>;

type Story = StoryObj<typeof TableCell>;

export const Header: Story = {
  render: () => (
    <table style={{ borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <TableCell isHeader>Name</TableCell>
          <TableCell isHeader>Parameters</TableCell>
          <TableCell isHeader>Source</TableCell>
          <TableCell isHeader>Tag</TableCell>
        </tr>
      </thead>
    </table>
  ),
};

export const Body: Story = {
  render: () => (
    <table style={{ borderCollapse: 'collapse' }}>
      <tbody>
        <tr>
          <TableCell>Some value</TableCell>
          <TableCell>Another value</TableCell>
          <TableCell>One more value</TableCell>
          <TableCell>Wubba Lubba Dub Dub</TableCell>
        </tr>
        <tr>
          <TableCell>Some value</TableCell>
          <TableCell>Another value</TableCell>
          <TableCell>One more value</TableCell>
          <TableCell>Wubba Lubba Dub Dub</TableCell>
        </tr>
        <tr>
          <TableCell>Some value</TableCell>
          <TableCell>Another value</TableCell>
          <TableCell>One more value</TableCell>
          <TableCell>Wubba Lubba Dub Dub</TableCell>
        </tr>
      </tbody>
    </table>
  ),
};
