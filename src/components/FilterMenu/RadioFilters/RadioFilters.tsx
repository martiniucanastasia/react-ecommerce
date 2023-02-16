import { CategoryFilterType } from "../../../types";
import { useFilterContext } from "../../../context/FilterContext";

import { FilterMenuStyled as F } from "../FilterMenuStyled";
import { Radio } from "../../InputControls/Radio/Radio";

import {
  getDiscountNumbers,
  getPriceRangeNumbers,
  getPriceSingleNumbers,
} from "../../../helpers";

export const RadioFilters = ({ filters, title, type }: CategoryFilterType) => {
  const { query, setQuery } = useFilterContext();

  const buildSegmentPair = (type: string, from: string, to: string): string => {
    return `${type}_gte=${from}&${type}_lte=${to}`;
  };

  const buildSegmentSingle = (type: string, value: string): string => {
    return `${type}_gte=${value}`;
  };

  const handleChange = (type: string, value: string) => {
    setQuery((prev) => {
      let segments = prev.split("&").filter((filterValue) => filterValue);
      let segment;

      switch (type) {
        case "discountPercentage":
          const [from, to] = getDiscountNumbers(value);
          segment = buildSegmentPair(type, from, to);
          segments.forEach((segment, index) => {
            if (segment.includes("discountPercentage")) {
              segments.splice(index, 2);
            }
          });
          segments.push(segment);
          break;
        case "rating":
          segment = buildSegmentSingle(type, value);
          segments.forEach((segment, index) => {
            if (segment.includes("rating")) {
              segments.splice(index, 1);
            }
          });
          segments.push(segment);
          break;
        case "price":
          if (value.includes("-")) {
            const [from, to] = getPriceRangeNumbers(value);
            segment = buildSegmentPair(type, from, to);
          } else {
            const [transformedValue] = getPriceSingleNumbers(value);
            segment = buildSegmentSingle(type, transformedValue);
          }
          segments.forEach((segment, index) => {
            if (segment.includes("price")) {
              segments.splice(index, 2);
            }
          });
          segments.push(segment);
          break;
        default:
          break;
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
              <Radio
                onChange={handleChange}
                value={`${filter}`}
                title={title}
                type={type}
                query={query}
              />
            </F.List>
          );
        })}
      </ul>
    </F.Category>
  );
};
