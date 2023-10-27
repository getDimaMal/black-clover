import React from 'react';
import Categories from '@black-clover/front/services/components/categories/Categories';
import SearchDropdown from '@black-clover/front/ui/components/atoms/Inputs/SearchParts/SearchDropdown/SearchDropdown';
import CategoryHeader from '@black-clover/front/ui/components/organisms/categories/CategoryHeader/CategoryHeader';
import PageLayout from '@black-clover/front/ui/components/organisms/layouts/PageLayout/PageLayout';

const CategoryPage = () => {
  return (
    <Categories>
      {({ search }) => (
        <PageLayout
          Header={
            <CategoryHeader
              name="Workspace Name"
              Search={<SearchDropdown {...search} />}
              Filters={<div>Place for Filters</div>}
            />
          }
          Content={
            <div
              style={{
                height: '5000px',
                padding: '30px',

                fontSize: '50px',
                textAlign: 'center',

                borderRadius: '24px',
                backgroundColor: '#FAFAFF',
                boxShadow: '0px 4px 8px 0px rgba(3, 4, 44, 0.08)',
              }}
            >
              Content with height: 5000px
            </div>
          }
        />
      )}
    </Categories>
  );
};

export default CategoryPage;
