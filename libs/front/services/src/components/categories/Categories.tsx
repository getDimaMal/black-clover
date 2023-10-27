import React, { FC } from 'react';

import { useSearchField } from '../../hooks/useSearchField';

type Search = {
  value: string;
  onSearch: (value: string) => void;
  suggestions: { label: string; subLabel: string }[];
};

export type CategoriesProps = {
  children: (props: { search: Search }) => React.ReactElement;
};

const suggestions: Search['suggestions'] = [
  { label: 'Search', subLabel: 'suggestion' },
  { label: 'Another search', subLabel: 'and another suggestion' },
  { label: 'One more search', subLabel: 'and one more suggestion' },
  { label: 'Wubba Lubba', subLabel: 'Dub Dub' },
];

const Categories: FC<CategoriesProps> = ({ children }) => {
  const search = useSearchField({ initValue: '!!!' });

  return children({ search: { ...search, suggestions } });
};

export default Categories;
