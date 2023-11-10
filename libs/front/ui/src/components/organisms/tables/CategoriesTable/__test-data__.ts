import { Category } from './CategoriesTable';

export const category: Omit<Category, 'id'> = {
  name: 'Category Name',
  description: 'Category Description',
  eventsAmount: 12,
};

export const getCategories = (amount: number): Category[] =>
  new Array(amount).fill(category).map((category, index) => ({ ...category, id: index }));
