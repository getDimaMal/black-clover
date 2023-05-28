import { CreateUserDto } from '@black-clover/back/users/dto/create-user.dto';
import { SelfUserDto } from '@black-clover/back/users/dto/self-user.dto';
import { UpdateUserDto } from '@black-clover/back/users/dto/update-user.dto';

const email = 'test@email.com';

export const getSelfUserPros = (props: Partial<Omit<SelfUserDto, 'id'>> = {}): Omit<SelfUserDto, 'id'> => ({
  email,
  firstName: null,
  lastName: null,
  ...props,
});

export const getCreateUserProps = (props: Partial<CreateUserDto> = {}): CreateUserDto => ({
  email,
  password: 'password123',
  ...props,
});

export const getUpdateUserProps = (props: Partial<UpdateUserDto> = {}): UpdateUserDto => ({
  firstName: null,
  lastName: null,
  ...props,
});

export const getSignErrorCases: { case: string; props: CreateUserDto; error: string }[] = [
  {
    case: 'an email is not email',
    props: getCreateUserProps({ email: 'notEmail' }),
    error: 'email must be an email',
  },
  {
    case: 'an email is undefined',
    props: getCreateUserProps({ email: undefined }),
    error: 'email must be an email',
  },
  {
    case: 'a password is undefined',
    props: getCreateUserProps({ password: undefined }),
    error: 'password should be min 8 chars with letters & numbers',
  },
  {
    case: 'a password have only letters',
    props: getCreateUserProps({ password: 'password without numbers' }),
    error: 'password should be min 8 chars with letters & numbers',
  },
  {
    case: 'a password have only numbers',
    props: getCreateUserProps({ password: '123456789' }),
    error: 'password should be min 8 chars with letters & numbers',
  },
  {
    case: 'a password length is less than 8 characters',
    props: getCreateUserProps({ password: 'no123' }),
    error: 'password should be min 8 chars with letters & numbers',
  },
];

export const getUpdateResultCases: {
  case: string;
  props: UpdateUserDto;
  result: Omit<SelfUserDto, 'id'>;
}[] = [
  {
    case: 'only userName provided',
    props: getUpdateUserProps({ firstName: 'Rick' }),
    result: getSelfUserPros({ firstName: 'Rick' }),
  },
  {
    case: 'only lastName provided',
    props: getUpdateUserProps({ lastName: 'Sanchez' }),
    result: getSelfUserPros({ lastName: 'Sanchez' }),
  },
  {
    case: 'a firstName surrounded by spaces',
    props: getUpdateUserProps({ firstName: '   Rick   ' }),
    result: getSelfUserPros({ firstName: 'Rick' }),
  },
  {
    case: 'a lastName surrounded by spaces',
    props: getUpdateUserProps({ lastName: '   Sanchez   ' }),
    result: getSelfUserPros({ lastName: 'Sanchez' }),
  },
];

export const getUpdateErrorCases: { case: string; props: UpdateUserDto; error: string }[] = [
  {
    case: 'a firstName is too short',
    props: getUpdateUserProps({ firstName: 'li' }),
    error: 'firstName must be longer than or equal to 3 characters',
  },
  {
    case: 'a lastName is too short',
    props: getUpdateUserProps({ lastName: 'li' }),
    error: 'lastName must be longer than or equal to 3 characters',
  },
  {
    case: 'a firstName is too long',
    props: getUpdateUserProps({ firstName: 'too long first name to check validation' }),
    error: 'firstName must be shorter than or equal to 24 characters',
  },
  {
    case: 'a lastName is too long',
    props: getUpdateUserProps({ lastName: 'too long last name to check validation' }),
    error: 'lastName must be shorter than or equal to 24 characters',
  },
];
