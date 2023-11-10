import React from 'react';
import GroupsList from '@black-clover/front/services/groups/GroupsList';
import Button from '@black-clover/front/ui/components/atoms/Buttons/Button/Button';
import SearchDropdown from '@black-clover/front/ui/components/atoms/Inputs/SearchParts/SearchDropdown/SearchDropdown';
import { useModal } from '@black-clover/front/ui/components/atoms/Modals/ModalProvider/ModalProvider';
import PageHeader from '@black-clover/front/ui/components/organisms/layouts/PageHeader/PageHeader';
import PageLayout from '@black-clover/front/ui/components/organisms/layouts/PageLayout/PageLayout';
import GroupsTable from '@black-clover/front/ui/components/organisms/tables/GroupsTable/GroupsTable';

const GroupsPage = () => {
  const { openSideModal } = useModal();

  return (
    <GroupsList>
      {({ search, groupsTable }) => (
        <PageLayout
          Header={
            <PageHeader
              header="Groups"
              Actions={<Button label="New Group" onClick={() => openSideModal(<div>Create Group Form</div>)} />}
              Search={<SearchDropdown {...search} />}
            />
          }
          Content={<GroupsTable {...groupsTable} />}
        />
      )}
    </GroupsList>
  );
};

export default GroupsPage;
