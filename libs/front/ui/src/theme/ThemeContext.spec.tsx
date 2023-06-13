import React from 'react';
import { renderHook } from '@testing-library/react-hooks';

import ThemeContext, { useThemeContext } from './ThemeContext';

describe('useThemeContext', () => {
  it('should throw an error if used outside a ThemeContext', () => {
    jest.spyOn(React, 'useContext').mockReturnValue(undefined);

    const { result } = renderHook(() => useThemeContext());

    expect(result.error).toEqual(new Error('useThemeContext must be used within a ThemeContext'));
  });

  it('should return the context if used within a ThemeContext', () => {
    const theme = 'light';
    const setMode = jest.fn();
    const toggleMode = jest.fn();

    jest.spyOn(React, 'useContext').mockReturnValueOnce({ theme, setMode, toggleMode });

    const { result } = renderHook(() => useThemeContext());

    expect(React.useContext).toHaveBeenCalledWith(ThemeContext);
    expect(result.current).toEqual({ theme, setMode, toggleMode });
  });
});
