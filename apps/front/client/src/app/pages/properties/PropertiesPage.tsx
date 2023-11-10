import React from 'react';
import PropertiesList from '@black-clover/front/services/properties/PropertiesList';
import SearchDropdown from '@black-clover/front/ui/components/atoms/Inputs/SearchParts/SearchDropdown/SearchDropdown';
import { useModal } from '@black-clover/front/ui/components/atoms/Modals/ModalProvider/ModalProvider';
import PageLayout from '@black-clover/front/ui/components/organisms/layouts/PageLayout/PageLayout';
import PropertiesTable from '@black-clover/front/ui/components/organisms/tables/PropertiesTable/PropertiesTable';

import PropertiesHeader from './PropertiesHeader';

const PropertiesPage = () => {
  const { openSideModal } = useModal();

  return (
    <PropertiesList>
      {({ search, propertiesTable }) => (
        <PageLayout
          Header={
            <PropertiesHeader
              onNew={() => openSideModal(<div>Create Property Form</div>)}
              SearchField={<SearchDropdown {...search} />}
            />
          }
          Content={<PropertiesTable {...propertiesTable} />}
        />
      )}
    </PropertiesList>
  );
};

export default PropertiesPage;
