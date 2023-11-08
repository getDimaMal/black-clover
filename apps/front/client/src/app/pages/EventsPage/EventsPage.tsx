import React from 'react';
import Events from '@black-clover/front/services/components/events/Events';
import { useWorkspace } from '@black-clover/front/services/components/workspaces/WorkspaceProvider/WorkspaceProvider';
import Filter from '@black-clover/front/ui/components/atoms/Inputs/SearchParts/Filter/Filter';
import SearchDropdown from '@black-clover/front/ui/components/atoms/Inputs/SearchParts/SearchDropdown/SearchDropdown';
import { useModal } from '@black-clover/front/ui/components/atoms/Modals/ModalProvider/ModalProvider';
import EventsHeader from '@black-clover/front/ui/components/organisms/events/EventsHeader/EventsHeader';
import EventsTable from '@black-clover/front/ui/components/organisms/events/EventsTable/EventsTable';
import PageLayout from '@black-clover/front/ui/components/organisms/layouts/PageLayout/PageLayout';

const EventsPage = () => {
  const { workspace } = useWorkspace();
  const { openSideModal } = useModal();

  if (!workspace) return null;

  return (
    <Events>
      {({ search, categoriesFilter, sourcesFilter, tagsFilter, categoryTable }) => (
        <PageLayout
          Header={
            <EventsHeader
              name={workspace?.name}
              onCreateEventClick={() => openSideModal(<div>Create Even Form</div>)}
              onCreateCategoryClick={() => openSideModal(<div>Create Category Form</div>)}
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
    </Events>
  );
};

export default EventsPage;
