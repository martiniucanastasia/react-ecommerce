import { Dispatch, ReactElement, SetStateAction } from "react";

interface SortFilterProps {
  children: ReactElement[];
  setSortFilters: Dispatch<SetStateAction<string>>;
}

export const SortFilter = ({ children, setSortFilters }: SortFilterProps) => {
  return (
    <select
      defaultValue={"price-asc"}
      onChange={(e) => setSortFilters(e.target.value)}
    >
      {children}
    </select>
  );
};
