import React from 'react';
import PropertiesList from '@black-clover/front/services/properties/PropertiesList';
import Button from '@black-clover/front/ui/components/atoms/Buttons/Button/Button';
import SearchDropdown from '@black-clover/front/ui/components/atoms/Inputs/SearchParts/SearchDropdown/SearchDropdown';
import { useModal } from '@black-clover/front/ui/components/atoms/Modals/ModalProvider/ModalProvider';
import PageHeader from '@black-clover/front/ui/components/organisms/layouts/PageHeader/PageHeader';
import PageLayout from '@black-clover/front/ui/components/organisms/layouts/PageLayout/PageLayout';
import PropertiesTable from '@black-clover/front/ui/components/organisms/tables/PropertiesTable/PropertiesTable';

const PropertiesPage = () => {
  const { openSideModal } = useModal();

  return (
    <PropertiesList>
      {({ search, propertiesTable }) => (
        <PageLayout
          Header={
            <PageHeader
              header="Propperties"
              Actions={<Button label="New Property" onClick={() => openSideModal(<div>Create Property Form</div>)} />}
              Search={<SearchDropdown {...search} />}
            />
          }
          Content={<PropertiesTable {...propertiesTable} />}
        />
      )}
    </PropertiesList>
  );
};

export default PropertiesPage;
