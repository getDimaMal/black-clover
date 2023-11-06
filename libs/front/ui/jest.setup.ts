import { act, renderHook } from '@testing-library/react-hooks';

import '@testing-library/jest-dom';
import 'reflect-metadata';

afterEach(() => {
  jest.clearAllMocks();
});

export { renderHook, act };
