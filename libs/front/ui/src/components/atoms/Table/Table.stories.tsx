import { Meta, StoryObj } from '@storybook/react';

import Table, { TableProps } from './Table';

export default {
  component: Table,
  args: {
    HeaderLeft: 'Header Left',
    HeaderRight: 'Header Right',
  },
} as Meta<TableProps>;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: (args) => (
    <Table {...args}>
      <thead>
        <Table.TableRow>
          <Table.TableCell isHeader>Column Header</Table.TableCell>
          <Table.TableCell isHeader>Column Header</Table.TableCell>
          <Table.TableCell isHeader>Column Header</Table.TableCell>
          <Table.TableCell isHeader>Column Header</Table.TableCell>
        </Table.TableRow>
      </thead>
      <tbody>
        <Table.TableRow>
          <Table.TableCell>Cell Data</Table.TableCell>
          <Table.TableCell>Cell Data</Table.TableCell>
          <Table.TableCell>Cell Data</Table.TableCell>
          <Table.TableCell>Cell Data</Table.TableCell>
        </Table.TableRow>
        <Table.TableRow>
          <Table.TableCell>Cell Data</Table.TableCell>
          <Table.TableCell>Cell Data</Table.TableCell>
          <Table.TableCell>Cell Data</Table.TableCell>
          <Table.TableCell>Cell Data</Table.TableCell>
        </Table.TableRow>
      </tbody>
    </Table>
  ),
};
