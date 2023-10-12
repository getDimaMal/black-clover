import React from 'react';
import { render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

import AuthProvider, { useAuth } from './AuthContext';

describe('AuthContext', () => {
  describe('useAuth', () => {
    it('should throw an error if used outside of the AuthContext', () => {
      jest.spyOn(React, 'useContext').mockReturnValue(undefined);

      const { result } = renderHook(() => useAuth());

      expect(result.error).toEqual(new Error('useAuth must be used within an AuthProvider'));
    });
  });

  describe('AuthProvider', () => {
    it('should render children', () => {
      const children = 'Some Children';
      const { getByText } = render(
        <AuthProvider>
          <div>{children}</div>
        </AuthProvider>
      );

      expect(getByText(children)).toBeInTheDocument();
    });
  });
});
