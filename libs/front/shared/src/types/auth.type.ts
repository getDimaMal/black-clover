import { ChangePasswordNoTokenDto } from '@black-clover/shared/dto/users/change-password.dto';
import { CheckEmailDto } from '@black-clover/shared/dto/users/check-email.dto';
import { CreateUserDto } from '@black-clover/shared/dto/users/create-user.dto';

export type SignInFormProps = {
  isLoading: boolean;
  resetPasswordLink: string;
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

export type ResetPasswordFormProps = {
  isLoading: boolean;
  onSubmit: (args: CheckEmailDto) => void;
  errorMessage: string | null;
  changePasswordLink: string | null;
};

export type ChangePasswordFormProps = {
  isLoading: boolean;
  onSubmit: (args: ChangePasswordNoTokenDto) => void;
} & Partial<{
  error: null | string;
}>;
