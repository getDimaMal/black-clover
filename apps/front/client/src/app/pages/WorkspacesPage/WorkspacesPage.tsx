import { useWorkspace } from '@black-clover/front/services/components/workspaces/WorkspaceProvider/WorkspaceProvider';
import WorkspacesList from '@black-clover/front/services/components/workspaces/WorkspacesList/WorkspacesList';
import { useModal } from '@black-clover/front/ui/components/atoms/Modals/ModalProvider/ModalProvider';
import { default as WorkspacesListUI } from '@black-clover/front/ui/components/organisms/workspaces/WorkspacesList/WorkspacesList';
import { WorkspaceDto } from '@black-clover/shared/dto/workspaces/workspace.dto';

import CreateWorkspaceForm from './CreateWorkspaceForm/CreateWorkspaceForm';

const WorkspacesPage = () => {
  const { setWorkspace } = useWorkspace();
  const { openModal, close: closeModal } = useModal();

  const handleSuccess = (callback: () => void) => (data: WorkspaceDto) => {
    setWorkspace(data);
    closeModal();
    callback();
  };

  return (
    <WorkspacesList
      render={({ workspaces, isLoading, loadWorkspacesList }) => (
        <WorkspacesListUI
          isLoading={isLoading}
          onAddWorkspace={() => openModal(<CreateWorkspaceForm onSuccess={handleSuccess(loadWorkspacesList)} />)}
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
