import React, { FC } from 'react';
import { Event, EventsTableProps } from '@black-clover/front/ui/components/organisms/tables/EventsTable/EventsTable';

import { useFilter } from '../../hooks/useFilter';
import { useSearchField } from '../../hooks/useSearchField';

type Search = {
  value: string;
  onSearch: (value: string) => void;
  suggestions: { label: string; subLabel: string }[];
};

type Option = {
  id: string;
  label: string;
};

type Filter = {
  value: string[];
  options: Record<string, Option>;
  onSearch: (value: string) => void;
  onChange: (value: string[]) => void;
};

export type CategoriesProps = {
  children: (props: {
    search: Search;
    tagsFilter: Filter;
    sourcesFilter: Filter;
    categoriesFilter: Filter;
    eventsTable: EventsTableProps;
  }) => React.ReactElement;
};

const suggestions: Search['suggestions'] = [
  { label: 'Search', subLabel: 'suggestion' },
  { label: 'Another search', subLabel: 'and another suggestion' },
  { label: 'One more search', subLabel: 'and one more suggestion' },
  { label: 'Wubba Lubba', subLabel: 'Dub Dub' },
];

const options: Filter['options'] = {
  '1': { id: '1', label: 'Label 1' },
  '2': { id: '2', label: 'Label 2' },
  '3': { id: '3', label: 'Label 3' },
  '4': { id: '4', label: 'Label 4' },
  '5': { id: '5', label: 'Label 5' },
  '6': { id: '6', label: 'This label has too many words' },
};

const event: Omit<Event, 'id'> = {
  name: 'Share Button Tap',
  description: 'A share button has been tapped',
  parameters: [
    'available_auth_services: [String]',
    'available_auth_services: [String]',
    'available_auth_services: [String]',
  ],
  sources: ['iOS', 'Android'],
  tags: ['Generated', 'Skipped', 'Skipped', 'Skipped', 'Generated', 'Skipped', 'Skipped', 'Skipped', 'Generated'],
};

const Events: FC<CategoriesProps> = ({ children }) => {
  const search = useSearchField();

  const tagsFilter = useFilter();
  const sourcesFilter = useFilter();
  const categoriesFilter = useFilter();

  return children({
    search: { ...search, suggestions },
    tagsFilter: { ...tagsFilter, options },
    sourcesFilter: { ...sourcesFilter, options },
    categoriesFilter: { ...categoriesFilter, options },
    eventsTable: {
      events: new Array(4).fill(event).map((event, id) => ({ ...event, id })),
      categoryName: 'Landing',
      eventsAmount: 4,
    },
  });
};

export default Events;
