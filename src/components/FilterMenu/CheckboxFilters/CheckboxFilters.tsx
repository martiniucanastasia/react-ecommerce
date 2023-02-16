import { CategoryFilterType } from "../../../types";
import { useFilterContext } from "../../../context/FilterContext";

import { FilterMenuStyled as F } from "../FilterMenuStyled";
import { Checkbox } from "../../InputControls/Checkbox/CheckboxStyled";

export const CheckboxFilters = ({
  filters,
  title,
  type,
}: CategoryFilterType) => {
  const { query, setQuery } = useFilterContext();

  const buildSegment = (type: string, filter: string) => {
    return `${type}_like=${filter}`;
  };

  const handleChange = (value: string, isChecked: boolean) => {
    setQuery((prev) => {
      let segments = prev.split("&").filter((filterValue) => filterValue);
      const segment = buildSegment(type, value);
      if (isChecked) {
        segments.push(segment);
      } else {
        segments = segments.filter((value) => value !== segment);
      }
      return segments.join("&");
    });
  };

  return (
    <F.Category>
      <F.Title>{title}</F.Title>
      <ul>
        {filters.map((filter, index) => {
          return (
            <F.List key={index}>
              <Checkbox
                onChange={handleChange}
                value={`${filter}`}
                isChecked={query.includes(buildSegment(type, `${filter}`))}
              />
            </F.List>
          );
        })}
      </ul>
    </F.Category>
  );
};
