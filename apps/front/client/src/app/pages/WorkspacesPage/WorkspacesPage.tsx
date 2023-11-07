import { useWorkspace } from '@black-clover/front/services/components/workspaces/WorkspaceProvider/WorkspaceProvider';
import WorkspacesList from '@black-clover/front/services/components/workspaces/WorkspacesList/WorkspacesList';
import { default as WorkspacesListUI } from '@black-clover/front/ui/components/organisms/workspaces/WorkspacesList/WorkspacesList';

import CreateWorkspaceForm from './CreateWorkspaceForm/CreateWorkspaceForm';

const WorkspacesPage = () => {
  const { setWorkspace } = useWorkspace();

  return (
    <WorkspacesList
      render={({ workspaces, isLoading, loadWorkspacesList }) => (
        <WorkspacesListUI
          isLoading={isLoading}
          renderWorkspaceForm={({ handleClose }) => (
            <CreateWorkspaceForm
              onSuccess={(data) => {
                setWorkspace(data);
                loadWorkspacesList();
                handleClose();
              }}
            />
          )}
        >
          {workspaces.map((workspace) => (
            <WorkspacesListUI.Item key={workspace.id} onClick={() => setWorkspace(workspace)}>
              {workspace.name}
            </WorkspacesListUI.Item>
          ))}
        </WorkspacesListUI>
      )}
    />
  );
};

export default WorkspacesPage;
