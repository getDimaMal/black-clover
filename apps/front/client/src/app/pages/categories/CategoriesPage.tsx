import React from 'react';
import CategoriesList from '@black-clover/front/services/categories/CategoriesList';
import Button from '@black-clover/front/ui/components/atoms/Buttons/Button/Button';
import SearchDropdown from '@black-clover/front/ui/components/atoms/Inputs/SearchParts/SearchDropdown/SearchDropdown';
import { useModal } from '@black-clover/front/ui/components/atoms/Modals/ModalProvider/ModalProvider';
import PageHeader from '@black-clover/front/ui/components/organisms/layouts/PageHeader/PageHeader';
import PageLayout from '@black-clover/front/ui/components/organisms/layouts/PageLayout/PageLayout';
import CategoriesTable from '@black-clover/front/ui/components/organisms/tables/CategoriesTable/CategoriesTable';

const CategoriesPage = () => {
  const { openSideModal } = useModal();

  return (
    <CategoriesList>
      {({ search, categoriesTable }) => (
        <PageLayout
          Header={
            <PageHeader
              header="Categories"
              Actions={<Button label="New Category" onClick={() => openSideModal(<div>Create Category Form</div>)} />}
              Search={<SearchDropdown {...search} />}
            />
          }
          Content={
            <>
              <CategoriesTable {...categoriesTable} />
              <CategoriesTable {...categoriesTable} groupName={undefined} categoriesAmount={undefined} />
            </>
          }
        />
      )}
    </CategoriesList>
  );
};

export default CategoriesPage;
