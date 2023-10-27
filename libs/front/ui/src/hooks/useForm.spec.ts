import React from 'react';
import { act } from 'react-dom/test-utils';
import { renderHook } from '@testing-library/react-hooks';
import { validateSync } from 'class-validator';

import useForm from './useForm';

const mockValidationSync = jest.fn<ReturnType<typeof validateSync>, unknown[]>().mockReturnValue([]);
jest.mock('class-validator', () => ({
  validateSync: () => mockValidationSync(),
}));

const name = 'fieldName';

class Resolver {
  [name]: string;
}

const initForm: Resolver = { [name]: '' };

type TProps = React.FormEvent<HTMLFormElement | HTMLButtonElement>;
const getEvent = ({ ...props }: Partial<TProps> = {}) =>
  ({
    preventDefault: jest.fn(),
    stopPropagation: jest.fn(),
    ...props,
  } as TProps);

describe('useForm', () => {
  it('should call handleSubmit', async () => {
    const handleSubmitCallback = jest.fn();
    const { result } = renderHook(() => useForm<Resolver>({ initForm, Resolver }));

    await act(() => {
      result.current.handleSubmit(handleSubmitCallback)(getEvent());
    });

    expect(handleSubmitCallback).toHaveBeenCalledTimes(1);
  });

  describe('getInputProps', () => {
    it('should return name & value', () => {
      const { result } = renderHook(() => useForm<Resolver>({ initForm, Resolver }));

      expect(result.current.getInputProps(name).name).toBeDefined();
      expect(result.current.getInputProps(name).value).toBeDefined();
    });

    it('should update value when call onChange', async () => {
      const value = 'new value';
      const { result } = renderHook(() => useForm<Resolver>({ initForm, Resolver }));

      await act(async () => {
        result.current.getInputProps(name).onChange(name, value);
      });

      expect(result.current.getInputProps(name).value).toBe(value);
    });

    it('should return error when validation failed & call handleSubmit', async () => {
      const error = 'some error';
      mockValidationSync.mockReturnValue([{ property: name, constraints: { error } }]);

      const { result } = renderHook(() => useForm<Resolver>({ initForm, Resolver }));

      await act(async () => {
        result.current.handleSubmit(jest.fn)(getEvent());
      });

      expect(result.current.getInputProps(name).errorMessage).toBe(error);
    });
  });
});
