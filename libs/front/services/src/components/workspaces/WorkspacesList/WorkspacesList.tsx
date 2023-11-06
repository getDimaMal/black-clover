import { FC, useEffect } from 'react';
import { useGetWorkspacesList } from '@black-clover/front/api';
import { WorkspaceDto } from '@black-clover/shared/dto/workspaces/workspace.dto';

type RenderProps = {
  isLoading: boolean;
  workspaces: WorkspaceDto[];
  loadWorkspacesList: () => void;
};

export type WorkspacesListProps = {
  render: (props: RenderProps) => JSX.Element;
};

const WorkspacesList: FC<WorkspacesListProps> = ({ render }) => {
  const { workspaces, status, isLoading, loadWorkspacesList } = useGetWorkspacesList();

  useEffect(() => {
    if (status === 'idle') {
      loadWorkspacesList();
    }
  }, [loadWorkspacesList, status]);

  return render({ workspaces, isLoading, loadWorkspacesList });
};

export default WorkspacesList;
