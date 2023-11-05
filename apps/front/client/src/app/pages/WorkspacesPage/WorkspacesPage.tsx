import WorkspacesList from '@black-clover/front/ui/components/organisms/workspaces/WorkspacesList/WorkspacesList';

import CreateWorkspaceForm from './CreateWorkspaceForm/CreateWorkspaceForm';

const WorkspacesPage = () => {
  return (
    <WorkspacesList renderWorkspaceForm={({ handleClose }) => <CreateWorkspaceForm onSuccess={handleClose} />}>
      <WorkspacesList.Item>Workspace Name 1</WorkspacesList.Item>
      <WorkspacesList.Item>Workspace Name 2</WorkspacesList.Item>
      <WorkspacesList.Item>Workspace Name 3</WorkspacesList.Item>
      <WorkspacesList.Item>Workspace Name 4</WorkspacesList.Item>
      <WorkspacesList.Item>Workspace Name 5</WorkspacesList.Item>
      <WorkspacesList.Item>Workspace Name 6</WorkspacesList.Item>
    </WorkspacesList>
  );
};

export default WorkspacesPage;
