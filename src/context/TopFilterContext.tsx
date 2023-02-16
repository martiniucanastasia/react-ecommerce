import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";

type TopFilterContextType = {
  pageFilters: string;
  sortFilters: string;
  searchFilter: string;
  productsView: string;
  setPageFilters: Dispatch<SetStateAction<string>>;
  setSortFilters: Dispatch<SetStateAction<string>>;
  setSearchFilter: Dispatch<SetStateAction<string>>;
  changeProductsView: (type: string) => void;
};

const TopFilterContext = createContext<TopFilterContextType>(
  {} as TopFilterContextType
);

export const TopFilterContextProvider = ({ children }: PropsWithChildren) => {
  const [pageFilters, setPageFilters] = useState<string>("100");
  const [sortFilters, setSortFilters] = useState<string>("price-asc");
  const [productsView, setProductsView] = useState<string>("squares");
  const [searchFilter, setSearchFilter] = useState<string>("");

  const changeProductsView = (type: string) => setProductsView(type);

  return (
    <TopFilterContext.Provider
      value={{
        pageFilters,
        setPageFilters,
        sortFilters,
        setSortFilters,
        productsView,
        changeProductsView,
        searchFilter,
        setSearchFilter,
      }}
    >
      {children}
    </TopFilterContext.Provider>
  );
};

export const useTopFilterContext = () => useContext(TopFilterContext);
