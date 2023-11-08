import { FC, useEffect } from 'react';
import { useCreateCategory } from '@black-clover/front/api';
import { CategoryDto } from '@black-clover/shared/dto/categories/category.dto';
import { CreateCategoryDto } from '@black-clover/shared/dto/categories/create-category.dto';

import FormContainer, { FormContainerRenderProps } from '../components/form/FormContainer';

type RenderPros = {
  field: FormContainerRenderProps<CreateCategoryDto>;
  isLoading: boolean;
  error: string | null;
};

export type CreateCategoryProps = {
  workspaceId: string;
  onSuccess: (data: CategoryDto) => void;
  render: (props: RenderPros) => JSX.Element;
};

const CreateCategory: FC<CreateCategoryProps> = ({ workspaceId, onSuccess, render }) => {
  const { category, creteCategory, isLoading, error, status } = useCreateCategory();

  useEffect(() => {
    if (status === 'success' && category) {
      onSuccess(category);
    }
  }, [category, onSuccess, status]);

  return (
    <FormContainer
      initForm={{ workspaceId, name: '' }}
      onSubmit={creteCategory}
      Resolver={CreateCategoryDto}
      render={(field) => render({ field, isLoading, error })}
    />
  );
};

export default CreateCategory;
