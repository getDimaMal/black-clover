import { useCallback } from 'react';

import { useApi } from '../useApi';
import { useRequest } from '../useRequest';

export function useGetWorkspacesList() {
  const { workspaces } = useApi();
  const { error, status, isLoading, makeRequest, response: data } = useRequest(workspaces.getWorkspacesList);

  const loadWorkspacesList = useCallback(() => {
    makeRequest(null);
  }, [makeRequest]);

  return { data, loadWorkspacesList, error, status, isLoading };
}
