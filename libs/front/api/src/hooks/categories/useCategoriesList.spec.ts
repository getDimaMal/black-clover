import { renderHook } from '../../../jest.setup';

import { useCategoriesList } from './useCategoriesList';

describe('useCategoriesList', () => {
  it('should return default', () => {
    const { result } = renderHook(() => useCategoriesList());

    expect(result.current.categories).toEqual([]);
    expect(typeof result.current.getCategories).toBe('function');
  });
});
