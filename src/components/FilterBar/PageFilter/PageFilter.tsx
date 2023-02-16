import { Dispatch, ReactElement, SetStateAction } from "react";

interface PageFilterProps {
  children: ReactElement[];
  setPageFilters: Dispatch<SetStateAction<string>>;
}

export const PageFilter = ({ children, setPageFilters }: PageFilterProps) => {
  return (
    <select
      defaultValue={"100"}
      onChange={(e) => setPageFilters(e.target.value)}
    >
      {children}
    </select>
  );
};
