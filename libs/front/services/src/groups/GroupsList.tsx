import { FC } from 'react';

import { useSearchField } from '../hooks/useSearchField';

type Search = {
  value: string;
  onSearch: (value: string) => void;
  suggestions: { label: string; subLabel: string }[];
};

type Group = {
  id: string;
  name: string;
  description: string;
  categoriesAmount: number;
  eventsAmount: number;
};

type GroupsListProps = {
  children: (props: {
    search: Search;
    groupsTable: {
      groupName: string;
      groupsAmount: number;
      groups: Group[];
    };
  }) => JSX.Element;
};

const suggestions: Search['suggestions'] = [
  { label: 'Search', subLabel: 'suggestion' },
  { label: 'Another search', subLabel: 'and another suggestion' },
  { label: 'One more search', subLabel: 'and one more suggestion' },
  { label: 'Wubba Lubba', subLabel: 'Dub Dub' },
];

const group: Omit<Group, 'id'> = {
  name: 'Group Name',
  description: 'Group Description',
  categoriesAmount: 12,
  eventsAmount: 124,
};

const GroupsList: FC<GroupsListProps> = ({ children }) => {
  const search = useSearchField();

  return children({
    search: { ...search, suggestions },
    groupsTable: {
      groupName: 'Taxi',
      groupsAmount: 12,
      groups: new Array(4).fill(group).map((group, id) => ({ ...group, id })),
    },
  });
};

export default GroupsList;
