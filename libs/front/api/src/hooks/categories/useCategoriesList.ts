import { useApi } from '../useApi';
import { useRequest } from '../useRequest';

export function useCategoriesList() {
  const { categories } = useApi();
  const { response, makeRequest: getCategories, ...other } = useRequest(categories.getCategoriesList);

  return { categories: response || [], getCategories, ...other };
}
