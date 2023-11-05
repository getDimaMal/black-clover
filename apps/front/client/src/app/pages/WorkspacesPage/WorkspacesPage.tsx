import WorkspacesList from '@black-clover/front/services/components/workspaces/WorkspacesList/WorkspacesList';
import { default as WorkspacesListUI } from '@black-clover/front/ui/components/organisms/workspaces/WorkspacesList/WorkspacesList';

import CreateWorkspaceForm from './CreateWorkspaceForm/CreateWorkspaceForm';

const WorkspacesPage = () => {
  return (
    <WorkspacesList
      render={({ workspaces, isLoading, loadWorkspacesList }) => (
        <WorkspacesListUI
          isLoading={isLoading}
          renderWorkspaceForm={({ handleClose }) => (
            <CreateWorkspaceForm
              onSuccess={() => {
                loadWorkspacesList();
                handleClose();
              }}
            />
          )}
        >
          {workspaces.map(({ id, name }) => (
            <WorkspacesListUI.Item key={id}>{name}</WorkspacesListUI.Item>
          ))}
        </WorkspacesListUI>
      )}
    />
  );
};

export default WorkspacesPage;
