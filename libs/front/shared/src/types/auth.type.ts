import { ChangePasswordNoTokenDto } from '@black-clover/shared/dto/users/change-password.dto';
import { CheckEmailDto } from '@black-clover/shared/dto/users/check-email.dto';
import { CreateUserDto } from '@black-clover/shared/dto/users/create-user.dto';

export type SignInFormProps = {
  isLoading: boolean;
  changePasswordLink: string;
  errorMessage: string | null;
  onSignUp: () => void;
  onSignIn: (args: CreateUserDto) => void;
};

export type SignUpFormProps = {
  isLoading: boolean;
  signInLink: string;
  errorMessage: string | null;
  onSignUp: (args: CreateUserDto) => void;
};

export type CheckEmailFormProps = {
  isLoading: boolean;
  onSubmit: (args: CheckEmailDto) => void;
} & Partial<{
  error: null | string;
  token: null | string;
}>;

export type ChangePasswordFormProps = {
  isLoading: boolean;
  onSubmit: (args: ChangePasswordNoTokenDto) => void;
} & Partial<{
  error: null | string;
}>;
