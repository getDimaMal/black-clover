import { CheckEmailDto } from '@black-clover/shared/dto/users/check-email.dto';
import { CreateUserDto } from '@black-clover/shared/dto/users/create-user.dto';

export type LoginFormUIType = {
  isLoading: boolean;
  onSignUp: (args: CreateUserDto) => void;
  onSignIn: (args: CreateUserDto) => void;
} & Partial<{
  error: null | string;
}>;

export type CheckEmailFormProps = {
  isLoading: boolean;
  onSubmit: (args: CheckEmailDto) => void;
} & Partial<{
  error: null | string;
}>;
