import { Meta, StoryObj } from '@storybook/react';

import TableContainer, { TableContainerProps } from './TableContainer';

export default {
  component: TableContainer,
  args: {
    name: 'Landing',
    label: 'Category',
    subLabel: '30 events',
  },
} as Meta<TableContainerProps>;

type Story = StoryObj<typeof TableContainer>;

export const Default: Story = {
  render: (args) => (
    <TableContainer {...args}>
      <tbody>
        <tr>
          <td style={{ padding: '8px' }}>Cell Data</td>
        </tr>
      </tbody>
    </TableContainer>
  ),
};
