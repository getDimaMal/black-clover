import { CreateUserDto } from '@black-clover/shared/dto/users/create-user.dto';

export type LoginFormUIType = {
  isLoading: boolean;
  onSignUp: (args: CreateUserDto) => void;
  onSignIn: (args: CreateUserDto) => void;
};
