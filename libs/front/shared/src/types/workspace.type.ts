import { CreateWorkspaceDto } from '@black-clover/shared/dto/workspaces/create-workspace.dto';

export type CreateWorkspaceFormProps = {
  isLoading: boolean;
  errorMessage: string | null;
  onSubmit: (args: CreateWorkspaceDto) => void;
};
