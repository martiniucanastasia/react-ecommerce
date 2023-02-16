import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";

type FilterContextType = {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
};

const FilterContext = createContext<FilterContextType>({} as FilterContextType);

export const FilterContextProvider = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();
  const { pathname, search } = useLocation();
  const [query, setQuery] = useState<string>("");

  const contextValue = useMemo(() => {
    return { query, setQuery };
  }, [query, setQuery]);

  useEffect(() => {
    setQuery(search.replace("?", ""));
  }, []);

  useEffect(() => {
    navigate(`${pathname}?${query}`, { replace: true });
  }, [query]);

  return (
    <FilterContext.Provider value={contextValue}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => useContext(FilterContext);
