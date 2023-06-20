import useFormError, { UseFormProps } from './useFormError';

type TestFormValues = {
  username: string;
  password: string;
};

const formProps: UseFormProps<TestFormValues> = {
  dirtyFields: {
    username: true,
    password: false,
  },
  errors: {
    username: { message: 'Username is required', type: 'some type' },
    password: { message: 'Password is required', type: 'some type' },
  },
};

describe('useFormProps', () => {
  it('should return the error message for a dirty field', () => {
    const { getError } = useFormError(formProps);

    expect(getError('username')).toBe('Username is required');
  });

  it('should return undefined for a non-dirty field', () => {
    const { getError } = useFormError(formProps);

    expect(getError('password')).toBeUndefined();
  });
});
