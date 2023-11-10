import { FC } from 'react';

import { useSearchField } from '../hooks/useSearchField';

type Search = {
  value: string;
  onSearch: (value: string) => void;
  suggestions: { label: string; subLabel: string }[];
};

type Property = {
  id: string;
  name: string;
  description: string;
  type: string;
  events: string;
  constraints: string;
  optionality: string;
};

type PropertiesTable = {
  properties: Property[];
};

type PropertiesListProps = {
  children: (props: { search: Search; propertiesTable: PropertiesTable }) => JSX.Element;
};

const suggestions: Search['suggestions'] = [
  { label: 'Search', subLabel: 'suggestion' },
  { label: 'Another search', subLabel: 'and another suggestion' },
  { label: 'One more search', subLabel: 'and one more suggestion' },
  { label: 'Wubba Lubba', subLabel: 'Dub Dub' },
];

const property: Omit<Property, 'id'> = {
  name: 'Property Name',
  description: 'Description Name',
  type: 'string',
  events: 'Login Button Tap',
  constraints: 'Active Order',
  optionality: 'Optional',
};

const PropertiesList: FC<PropertiesListProps> = ({ children }) => {
  const search = useSearchField();

  return children({
    search: { ...search, suggestions },
    propertiesTable: {
      properties: new Array(4).fill(property).map((property, id) => ({ ...property, id })),
    },
  });
};

export default PropertiesList;
