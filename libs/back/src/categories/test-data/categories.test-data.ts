import { workspace } from '../../workspaces/test-data/workspaces.test-data';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { UpdateCategoryDto } from '../dto/update-category.dto';
import { Category } from '../entities/category.entity';

export const category: Category = {
  workspace,
  id: 'category-id-123',
  name: 'Category Name',
  description: 'Some Category Description',
};

export const categoriesList: Category[] = [
  {
    workspace,
    id: 'category-id-123',
    name: 'Category Name',
    description: 'Some Category Description',
  },
  {
    workspace,
    id: 'category-id-456',
    name: 'Category Name',
    description: 'Another Category Description',
  },
];

export const createCategory: CreateCategoryDto = {
  name: 'New Category',
  description: 'Description for new category',
  workspaceId: 'workspace-id-123',
};

export const updateCategory: UpdateCategoryDto = {
  name: 'Update Category',
  description: 'Description for new category',
};
