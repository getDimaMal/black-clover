import React from 'react';
import { IsString, MinLength } from 'class-validator';

import { act, renderHook } from '../../../jest.setup';

import { useForm } from './useForm';

class TestDto {
  @IsString()
  @MinLength(3)
  firstName: string;

  @IsString()
  lastName: string;
}

const initForm: TestDto = {
  firstName: 'Rick',
  lastName: 'Sanchez',
};

const mockEvent = {
  preventDefault: jest.fn(),
  stopPropagation: jest.fn(),
} as unknown as React.FormEvent<HTMLFormElement>;

describe('useForm', () => {
  it('should return default', () => {
    const { result } = renderHook(() => useForm({ initForm, Resolver: TestDto }));

    expect(result.current.control.current.getForm()).toEqual(initForm);
    expect(result.current.isSubmitted).toBeFalsy();

    expect(typeof result.current.handleSubmit).toBe('function');
  });

  it('should call callback on handleSubmit', () => {
    const callback = jest.fn();
    const { result } = renderHook(() => useForm({ initForm, Resolver: TestDto }));

    jest.spyOn(result.current.control.current, 'hasError').mockReturnValue(false);

    act(() => result.current.handleSubmit(callback)(mockEvent));

    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith(initForm);
    expect(result.current.isSubmitted).toBeTruthy();
  });

  it('should NOT call callback on handleSubmit when has error', () => {
    const callback = jest.fn();
    const { result } = renderHook(() => useForm({ initForm, Resolver: TestDto }));

    jest.spyOn(result.current.control.current, 'hasError').mockReturnValue(true);

    act(() => result.current.handleSubmit(callback)(mockEvent));

    expect(callback).toHaveBeenCalledTimes(0);
    expect(result.current.isSubmitted).toBeTruthy();
  });
});
