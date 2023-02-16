import { TopFilterStyled as T } from "./FilterBarStyled";
import { ReactComponent as BlockSvg } from "../../assets/images/block.svg";
import { ReactComponent as InlineSvg } from "../../assets/images/inline.svg";

import { useTopFilterContext } from "../../context/TopFilterContext";

import { PageFilter } from "./PageFilter/PageFilter";
import { SortFilter } from "./SortFilter/SortFilter";

import { pageFilterOptions, sortFilterOptions } from "./options";
import { Dispatch, SetStateAction } from "react";

interface FilterBarProps {
  filterMenuOpened: boolean;
  setFilterMenuOpened: Dispatch<SetStateAction<boolean>>;
}

export const FilterBar = ({
  filterMenuOpened,
  setFilterMenuOpened,
}: FilterBarProps) => {
  const {
    setPageFilters,
    setSortFilters,
    searchFilter,
    setSearchFilter,
    changeProductsView,
  } = useTopFilterContext();

  return (
    <T.Box>
      <T.FilterBox>
        <T.Info>
          <T.Title>Ecommerce Accesories & Fashion Item</T.Title>
          <T.Amt>About 9,620 results (0.62 seconds)</T.Amt>
        </T.Info>
        <T.TopFilters>
          <T.FilterPerPage>
            <T.Text>Per Page:</T.Text>
            <PageFilter setPageFilters={setPageFilters}>
              {pageFilterOptions.map((pages: string) => (
                <option key={pages} value={pages}>
                  {pages}
                </option>
              ))}
            </PageFilter>
          </T.FilterPerPage>
          <T.FilterSortBy>
            <T.Text>Sort By:</T.Text>
            <SortFilter setSortFilters={setSortFilters}>
              {sortFilterOptions.map((sorting, index) => (
                <option key={index} value={sorting.value}>
                  {sorting.title}
                </option>
              ))}
            </SortFilter>
          </T.FilterSortBy>
          <T.View>
            <T.Text>View:</T.Text>
            <button onClick={() => changeProductsView("squares")}>
              <BlockSvg />
            </button>
            <button onClick={() => changeProductsView("lines")}>
              <InlineSvg />
            </button>
          </T.View>
          <T.Search>
            <input
              type="text"
              autoComplete="off"
              placeholder="Search for product"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
            />
            {searchFilter.length > 0 && (
              <button onClick={() => setSearchFilter("")}>Clear</button>
            )}
          </T.Search>
        </T.TopFilters>
      </T.FilterBox>
      <T.ButtonBox>
        <T.ButtonFilter
          onClick={() => {
            filterMenuOpened
              ? setFilterMenuOpened(false)
              : setFilterMenuOpened(true);
          }}
        >
          <span>
            {filterMenuOpened ? "Hide " : "Show "}
            Filters
          </span>
        </T.ButtonFilter>
      </T.ButtonBox>
    </T.Box>
  );
};
