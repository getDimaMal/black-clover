import React from 'react';
import Categories from '@black-clover/front/services/components/categories/Categories';
import Filter from '@black-clover/front/ui/components/atoms/Inputs/SearchParts/Filter/Filter';
import SearchDropdown from '@black-clover/front/ui/components/atoms/Inputs/SearchParts/SearchDropdown/SearchDropdown';
import CategoriesTable from '@black-clover/front/ui/components/organisms/categories/CategoriesTable/CategoriesTable';
import CategoryHeader from '@black-clover/front/ui/components/organisms/categories/CategoryHeader/CategoryHeader';
import PageLayout from '@black-clover/front/ui/components/organisms/layouts/PageLayout/PageLayout';

const CategoriesPage = () => {
  return (
    <Categories>
      {({ search, categoriesFilter, sourcesFilter, tagsFilter, categoryTable }) => (
        <PageLayout
          Header={
            <CategoryHeader
              name="Workspace Name"
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
              <CategoriesTable {...categoryTable} />
              <CategoriesTable {...categoryTable} />
              <CategoriesTable {...categoryTable} />
              <CategoriesTable {...categoryTable} />
            </>
          }
        />
      )}
    </Categories>
  );
};

export default CategoriesPage;
