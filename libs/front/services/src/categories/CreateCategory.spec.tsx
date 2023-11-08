import React from 'react';
import * as authHook from '@black-clover/front/api';
import { CategoryDto } from '@black-clover/shared/dto/categories/category.dto';
import { CreateCategoryDto } from '@black-clover/shared/dto/categories/create-category.dto';

import { fireEvent } from '../../jest.setup';
import { FormContainerRenderProps } from '../components/form/FormContainer';
import { customRender } from '../test-utils';

import CreateCategory, { CreateCategoryProps } from './CreateCategory';

type ResultType = ReturnType<typeof authHook.useCreateCategory>;
const mockCreateCategory = jest.fn();
const getResult = (result: Partial<ResultType> = {}): ResultType => ({
  category: null,
  error: null,
  status: 'idle',
  isLoading: false,
  creteCategory: mockCreateCategory,
  ...result,
});
jest.mock('@black-clover/front/api', () => ({
  useCreateCategory: jest.fn<ResultType, unknown[]>(() => getResult()),
}));

const getForm = (form: Partial<CreateCategoryDto> = {}): CreateCategoryDto => ({
  name: 'Category Name',
  workspaceId: '2d04ecdf-b247-469d-99e0-a0ca1f7f1ab5',
  ...form,
});

const renderForm = (
  control: FormContainerRenderProps<CreateCategoryDto>['control'],
  form: CreateCategoryDto = getForm()
) => {
  control.current.setValue('name', form.name);
  control.current.setValue('description', form.description);
  return <div />;
};

const getProps = (props: Partial<CreateCategoryProps> = {}): CreateCategoryProps => ({
  onSuccess: jest.fn(),
  // ToDo Replace with a function
  workspaceId: '2d04ecdf-b247-469d-99e0-a0ca1f7f1ab5',
  render: ({ field: { control } }) => renderForm(control),
  ...props,
});

describe('CreateCategory', () => {
  it('should render default', () => {
    const test = 'test';
    const props = getProps({ render: () => <div>{test}</div> });
    const { getByText } = customRender(<CreateCategory {...props} />);

    expect(props.onSuccess).not.toHaveBeenCalled();
    expect(getByText(test)).toBeInTheDocument();
  });

  it('should call onSuccess', () => {
    jest
      .spyOn(authHook, 'useCreateCategory')
      .mockReturnValue(getResult({ category: {} as CategoryDto, status: 'success' }));

    const props = getProps();
    customRender(<CreateCategory {...props} />);

    expect(props.onSuccess).toHaveBeenCalledTimes(1);
  });

  describe('createCategory', () => {
    it('should call when form has NO errors', () => {
      const { getByRole } = customRender(<CreateCategory {...getProps()} />);

      fireEvent.submit(getByRole('form'));
      expect(mockCreateCategory).toHaveBeenCalledTimes(1);
      expect(mockCreateCategory).toHaveBeenCalledWith(getForm());
    });

    it.each<[string, CreateCategoryDto]>([
      ['name too short', getForm({ name: 'Q' })],
      ['name too long', getForm({ name: new Array(50).fill('Q').join('') })],
    ])('should NOT call when: %s', (_, form) => {
      const props = getProps({ render: ({ field: { control } }) => renderForm(control, form) });
      const { getByRole } = customRender(<CreateCategory {...props} />);

      fireEvent.submit(getByRole('form'));
      expect(mockCreateCategory).not.toHaveBeenCalled();
    });
  });
});
