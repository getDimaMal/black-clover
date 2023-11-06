import { act } from 'react-dom/test-utils';

import { renderHook } from '../../jest.setup';

import { useModalState } from './useModalState';

describe('useModalState', () => {
  it('should return default', () => {
    const { result } = renderHook(() => useModalState());

    expect(result.current.isOpen).toBeFalsy();
    expect(typeof result.current.open).toBe('function');
    expect(typeof result.current.close).toBe('function');
    expect(typeof result.current.toggle).toBe('function');
  });

  it('should call open & set isOpen true', () => {
    const { result } = renderHook(() => useModalState());

    expect(result.current.isOpen).toBeFalsy();

    act(() => result.current.open());
    expect(result.current.isOpen).toBeTruthy();
  });

  it('should call close & set isOpen false', () => {
    const { result } = renderHook(() => useModalState());

    act(() => result.current.open());
    expect(result.current.isOpen).toBeTruthy();

    act(() => result.current.close());
    expect(result.current.isOpen).toBeFalsy();
  });

  it('should call toggle', () => {
    const { result } = renderHook(() => useModalState());

    expect(result.current.isOpen).toBeFalsy();

    act(() => result.current.toggle());
    expect(result.current.isOpen).toBeTruthy();

    act(() => result.current.toggle());
    expect(result.current.isOpen).toBeFalsy();
  });
});
