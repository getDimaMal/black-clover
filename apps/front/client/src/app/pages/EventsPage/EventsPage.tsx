import React from 'react';
import Categories from '@black-clover/front/services/components/categories/Categories';
import { useWorkspace } from '@black-clover/front/services/components/workspaces/WorkspaceProvider/WorkspaceProvider';
import Filter from '@black-clover/front/ui/components/atoms/Inputs/SearchParts/Filter/Filter';
import SearchDropdown from '@black-clover/front/ui/components/atoms/Inputs/SearchParts/SearchDropdown/SearchDropdown';
import EventsHeader from '@black-clover/front/ui/components/organisms/events/EventsHeader/EventsHeader';
import EventsTable from '@black-clover/front/ui/components/organisms/events/EventsTable/EventsTable';
import PageLayout from '@black-clover/front/ui/components/organisms/layouts/PageLayout/PageLayout';

const EventsPage = () => {
  const { workspace } = useWorkspace();

  if (!workspace) return null;

  return (
    <Categories>
      {({ search, categoriesFilter, sourcesFilter, tagsFilter, categoryTable }) => (
        <PageLayout
          Header={
            <EventsHeader
              name={workspace?.name}
              Modal="Modal Form"
              Search={<SearchDropdown {...search} />}
              Filters={
                <>
                  <Filter {...categoriesFilter} withSearch label="Categories" />
                  <Filter {...sourcesFilter} withSearch label="Sources" />
                  <Filter {...tagsFilter} withSearch label="Tags" />
                </>
              }
            />
          }
          Content={
            <>
              <EventsTable {...categoryTable} />
              <EventsTable {...categoryTable} />
              <EventsTable {...categoryTable} />
              <EventsTable {...categoryTable} />
            </>
          }
        />
      )}
    </Categories>
  );
};

export default EventsPage;
