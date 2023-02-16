import { useEffect } from "react";
import { ProductType } from "../../../types/index";
import { useFilterContext } from "../../../context/FilterContext";

import { ProductTableStyled as P } from "./ProductsTableStyled";
import { Product } from "../../../components/Product/Product";
import { useTopFilterContext } from "../../../context/TopFilterContext";

interface ProductsTableProps {
  products: ProductType[];
  setProducts: (parameter: any) => void;
}

export const ProductsTable = ({
  products,
  setProducts,
}: ProductsTableProps) => {
  // Contexts
  const { query } = useFilterContext();
  const { sortFilters, pageFilters, searchFilter, productsView } =
    useTopFilterContext();

  useEffect(() => {
    let topFilterQuery = "";
    const [configuration, value] = sortFilters.split("-");

    // Building The Query
    topFilterQuery += `&_limit=${pageFilters}&`;
    topFilterQuery += `_sort=${configuration}&_order=${value}&`;
    topFilterQuery += `q=${searchFilter}`;

    fetch(`http://localhost:3000/products?${query}${topFilterQuery}`)
      .then((response) => response.json())
      .then((response) => setProducts(response))
      .catch((error) => console.error(error));
  }, [query, sortFilters, pageFilters, searchFilter, productsView]);

  const renderGridProduct = () => {
    return (
      <>
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              product={product}
              productsView={productsView}
            />
          );
        })}
      </>
    );
  };

  return (
    <>
      {productsView === "squares" ? (
        <P.GridSquares>{renderGridProduct()}</P.GridSquares>
      ) : (
        <P.GridLines>{renderGridProduct()}</P.GridLines>
      )}
    </>
  );
};
