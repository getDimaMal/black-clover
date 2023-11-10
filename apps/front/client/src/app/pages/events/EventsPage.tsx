import React from 'react';
import EventsList from '@black-clover/front/services/components/events/EventsList';
import { useWorkspace } from '@black-clover/front/services/components/workspaces/WorkspaceProvider/WorkspaceProvider';
import Button from '@black-clover/front/ui/components/atoms/Buttons/Button/Button';
import ButtonGroup from '@black-clover/front/ui/components/atoms/Buttons/ButtonGroup/ButtonGroup';
import Filter from '@black-clover/front/ui/components/atoms/Inputs/SearchParts/Filter/Filter';
import SearchDropdown from '@black-clover/front/ui/components/atoms/Inputs/SearchParts/SearchDropdown/SearchDropdown';
import { useModal } from '@black-clover/front/ui/components/atoms/Modals/ModalProvider/ModalProvider';
import PageHeader from '@black-clover/front/ui/components/organisms/layouts/PageHeader/PageHeader';
import PageLayout from '@black-clover/front/ui/components/organisms/layouts/PageLayout/PageLayout';
import EventsTable from '@black-clover/front/ui/components/organisms/tables/EventsTable/EventsTable';

const EventsPage = () => {
  const { workspace } = useWorkspace();
  const { openSideModal } = useModal();

  if (!workspace) return null;

  return (
    <EventsList>
      {({ search, categoriesFilter, sourcesFilter, tagsFilter, eventsTable }) => (
        <PageLayout
          Header={
            <PageHeader
              header={workspace?.name}
              Actions={
                <ButtonGroup>
                  <Button
                    variant="contained"
                    label="New Event"
                    onClick={() => openSideModal(<div>Create Even Form</div>)}
                  />
                  <Button
                    variant="outlined"
                    label="New Category"
                    onClick={() => openSideModal(<div>Create Category Form</div>)}
                  />
                </ButtonGroup>
              }
              Search={<SearchDropdown {...search} />}
              Filters={
                <ButtonGroup>
                  <Filter {...categoriesFilter} withSearch label="Categories" />
                  <Filter {...sourcesFilter} withSearch label="Sources" />
                  <Filter {...tagsFilter} withSearch label="Tags" />
                </ButtonGroup>
              }
            />
          }
          Content={
            <>
              <EventsTable {...eventsTable} />
              <EventsTable {...eventsTable} />
              <EventsTable {...eventsTable} eventsAmount={undefined} categoryName={undefined} />
            </>
          }
        />
      )}
    </EventsList>
  );
};

export default EventsPage;
