import { FC, useEffect } from 'react';
import { useCreateWorkspace } from '@black-clover/front/api';
import { CreateWorkspaceDto } from '@black-clover/shared/dto/workspaces/create-workspace.dto';
import { WorkspaceDto } from '@black-clover/shared/dto/workspaces/workspace.dto';

import FormContainer, { FormContainerRenderProps } from '../../form/FormContainer';

type RenderProps = {
  isLoading: boolean;
  error: string | null;
  field: FormContainerRenderProps<CreateWorkspaceDto>;
};

export type CreateWorkspaceProps = {
  onSuccess: (data: WorkspaceDto) => void;
  render: (props: RenderProps) => JSX.Element;
};

const CreateWorkspace: FC<CreateWorkspaceProps> = ({ onSuccess, render }) => {
  const { createWorkspace, data, error, status, isLoading } = useCreateWorkspace();

  useEffect(() => {
    if (status === 'success' && data) {
      onSuccess(data);
    }
  }, [data, onSuccess, status]);

  return (
    <FormContainer
      initForm={{ name: '' }}
      Resolver={CreateWorkspaceDto}
      onSubmit={createWorkspace}
      render={(field) => render({ field, error, isLoading })}
    />
  );
};

export default CreateWorkspace;
