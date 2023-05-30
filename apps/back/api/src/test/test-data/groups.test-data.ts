import { CreateGroupDto } from '@black-clover/back/groups/dto/create-group.dto';
import { GroupDto } from '@black-clover/back/groups/dto/group.dto';

import { getLorem } from '../test-utils/test-utils';

export const getCreateGroupProps = (props: Partial<CreateGroupDto> = {}): CreateGroupDto => ({
  name: 'Jedi Group',
  description: 'May the Force be with You',
  ...props,
});

export const getGroupProps = (props: Partial<Omit<GroupDto, 'id'>> = {}): Omit<GroupDto, 'id'> => ({
  name: 'Jedi Group',
  description: 'May the Force be with You',
  ...props,
});

export const getCreateUpdateGroupResultCases: {
  case: string;
  props: CreateGroupDto;
  result: Omit<GroupDto, 'id'>;
}[] = [
  {
    case: 'default body',
    props: getCreateGroupProps(),
    result: getGroupProps(),
  },
  {
    case: 'name string has spaces around it',
    props: getCreateGroupProps({ name: '    Obi-Wan Kenobi    ' }),
    result: getGroupProps({ name: 'Obi-Wan Kenobi' }),
  },
  {
    case: 'description is empty string',
    props: getCreateGroupProps({ description: '' }),
    result: getGroupProps({ description: '' }),
  },
  {
    case: 'description string has spaces around it',
    props: getCreateGroupProps({ description: '    May not spaces be with You    ' }),
    result: getGroupProps({ description: 'May not spaces be with You' }),
  },
];

export const getCreateUpdateGroupErrorCases: { case: string; props: CreateGroupDto; error: string }[] = [
  {
    case: 'name is null',
    props: getCreateGroupProps({ name: null }),
    error: 'name must be a string',
  },
  {
    case: 'name is empty string',
    props: getCreateGroupProps({ name: '' }),
    error: 'name must be longer than or equal to 3 characters',
  },
  {
    case: 'name is too long',
    props: getCreateGroupProps({ name: 'Very long name of group, to check validation and get error' }),
    error: 'name must be shorter than or equal to 48 characters',
  },
  {
    case: 'description is too long',
    props: getCreateGroupProps({ description: getLorem(5) }),
    error: 'description must be shorter than or equal to 1000 characters',
  },
];
