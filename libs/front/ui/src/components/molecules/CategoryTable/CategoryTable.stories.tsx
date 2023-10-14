import type { Meta, StoryObj } from '@storybook/react';

import Chips from '../../atoms/Chips/Chips';
import Tag from '../../atoms/Tag/Tag';

import CategoryTable, { CategoryTableProps } from './CategoryTable';

const style = { display: 'flex', columnGap: '8px' };

export default {
  component: CategoryTable,
  argTypes: {
    columns: { control: false },
    head: { control: false },
    body: { control: false },
  },
  args: {
    name: 'Landing',
    label: 'Category',
    subLabel: '300 events',
    columns: ['name', 'parameters', 'source', 'tag'],
    head: { name: 'Name', parameters: 'Parameters', source: 'Source', tag: 'Tag' },
    body: [
      {
        name: 'Share Button',
        parameters: 'content_id: Int',
        source: (
          <div style={style}>
            <Chips label="iOS" />
            <Chips label="Android" />
          </div>
        ),
        tag: (
          <div style={style}>
            <Tag label="Skipped" />
            <Tag label="Generated" />
          </div>
        ),
      },
      {
        name: 'Login Screen',
        parameters: 'content_id: Int',
        source: (
          <div style={style}>
            <Chips label="iOS" />
            <Chips label="Android" />
          </div>
        ),
        tag: (
          <div style={style}>
            <Tag label="Skipped" />
            <Tag label="Generated" />
          </div>
        ),
      },
    ],
  },
} as Meta<CategoryTableProps>;

type Story = StoryObj<typeof CategoryTable>;

export const Default: Story = {
  render: (args) => <CategoryTable {...args}></CategoryTable>,
};
