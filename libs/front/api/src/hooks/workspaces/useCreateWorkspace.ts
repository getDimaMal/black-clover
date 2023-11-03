import { useApi } from '../useApi';
import { useRequest } from '../useRequest';

export function useCreateWorkspace() {
  const { workspaces } = useApi();
  const { makeRequest: createWorkspace, response: data, isLoading, error } = useRequest(workspaces.createWorkspace);

  return { createWorkspace, data, isLoading, error };
}
