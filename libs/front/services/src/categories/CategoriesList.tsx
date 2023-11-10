import { FC } from 'react';

import { useSearchField } from '../hooks/useSearchField';

type Search = {
  value: string;
  onSearch: (value: string) => void;
  suggestions: { label: string; subLabel: string }[];
};

type Category = {
  id: string;
  name: string;
  description: string;
  eventsAmount: number;
};

type CategoriesListProps = {
  children: (props: {
    search: Search;
    categoriesTable: {
      groupName: string;
      categoriesAmount: number;
      categories: Category[];
    };
  }) => JSX.Element;
};

const suggestions: Search['suggestions'] = [
  { label: 'Search', subLabel: 'suggestion' },
  { label: 'Another search', subLabel: 'and another suggestion' },
  { label: 'One more search', subLabel: 'and one more suggestion' },
  { label: 'Wubba Lubba', subLabel: 'Dub Dub' },
];

const category: Omit<Category, 'id'> = {
  name: 'Category Name',
  description: 'Category Description',
  eventsAmount: 12,
};

const CategoriesList: FC<CategoriesListProps> = ({ children }) => {
  const search = useSearchField();

  return children({
    search: { ...search, suggestions },
    categoriesTable: {
      groupName: 'Taxi',
      categoriesAmount: 12,
      categories: new Array(4).fill(category).map((category, id) => ({ ...category, id })),
    },
  });
};

export default CategoriesList;
