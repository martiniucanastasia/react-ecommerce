import { useState, useEffect } from "react";
import { getFilters } from "../../requests/filters";
import { CategoryFilterType } from "../../types";
import { useFilterContext } from "../../context/FilterContext";
import { FilterBox as F } from "./FilterMenuStyled";

import { CheckboxFilters } from "./CheckboxFilters/CheckboxFilters";
import { RadioFilters } from "./RadioFilters/RadioFilters";

const filtersMapper: any = {
  brand: CheckboxFilters,
  discountPercentage: RadioFilters,
  rating: RadioFilters,
  category: CheckboxFilters,
  price: RadioFilters,
};

export const FilterMenu = () => {
  const [filters, setFilters] = useState<CategoryFilterType[]>([]);

  const { setQuery } = useFilterContext();

  useEffect(() => {
    getFilters()
      .then((response) => setFilters(response))
      .catch((error) => console.log(error));
  }, []);

  return (
    <F.Box>
      <F.ResetButton onClick={() => setQuery("")}>Reset Filters</F.ResetButton>
      {filters.map((filter, index) => {
        const { title, filters, type } = filter;
        const GeneratedFilterBlock = filtersMapper[filter.type];
        return (
          <GeneratedFilterBlock
            key={index}
            title={title}
            filters={filters}
            type={type}
          />
        );
      })}
    </F.Box>
  );
};
