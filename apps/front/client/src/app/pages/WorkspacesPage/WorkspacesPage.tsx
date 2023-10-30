import CreateWorkspaceForm from '@black-clover/front/ui/components/organisms/workspaces/CreateWorkspaceForm/CreateWorkspaceForm';
import WorkspacesList from '@black-clover/front/ui/components/organisms/workspaces/WorkspacesList/WorkspacesList';

const WorkspacesPage = () => {
  return (
    <WorkspacesList
      CreateWorkspaceForm={
        <CreateWorkspaceForm onSubmit={(data) => console.log(data)} isLoading={false} errorMessage={null} />
      }
    >
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
