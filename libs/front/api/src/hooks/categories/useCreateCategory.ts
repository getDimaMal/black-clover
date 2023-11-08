import { useApi } from '../useApi';
import { useRequest } from '../useRequest';

export function useCreateCategory() {
  const { categories } = useApi();
  const { response, makeRequest: creteCategory, ...other } = useRequest(categories.createCategory);

  return { category: response, creteCategory, ...other };
}
