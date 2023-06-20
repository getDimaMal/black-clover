import { FieldErrors, FieldValues } from 'react-hook-form';
import { DeepMap, DeepPartial } from 'react-hook-form/dist/types/utils';

export type UseFormProps<T extends FieldValues> = {
  dirtyFields: DeepMap<DeepPartial<T>, boolean>;
  errors: FieldErrors<T>;
};

const useFormError = <T extends FieldValues>({ dirtyFields, errors }: UseFormProps<T>) => {
  const getError = (key: keyof typeof dirtyFields) => {
    return dirtyFields[key] ? errors[key]?.message : undefined;
  };

  return { getError };
};

export default useFormError;
