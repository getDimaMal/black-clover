import { Group } from './GroupsTable';

const group: Omit<Group, 'id'> = {
  name: 'Group Name',
  description: 'Group Description',
  categoriesAmount: 12,
  eventsAmount: 124,
};

export const getGroups = (amount: number): Group[] =>
  new Array(amount).fill(group).map((group, id) => ({ ...group, id }));
