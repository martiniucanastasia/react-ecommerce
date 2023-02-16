import { useEffect, useState, useRef } from "react";

import { ProductPageStyled as P } from "./ProductsStyled";
import { Road } from "../../layout/Road/Road";
import { GlobalContainer } from "../../styles/global";
import { FilterBar } from "../../components/FilterBar/FilterBar";
import { FilterMenu } from "../../components/FilterMenu/FilterMenu";
import { Spinner } from "../../components/Spinner/Spinner";
import { Brands } from "../../components/Brands/Brands";
import { getProducts } from "../../requests/products";
import { ProductType } from "../../types";

import { FilterContextProvider } from "../../context/FilterContext";
import { TopFilterContextProvider } from "../../context/TopFilterContext";

import { ProductsTable } from "./ProductsTable/ProductsTable";
import { Alert } from "../../components/Alert/Alert";

export const Products = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [productsLoaded, setProductsLoaded] = useState<boolean>(false);
  const [filterMenuOpened, setFilterMenuOpened] = useState<boolean>(false);

  const filterMenuWrapperRef = useRef<null | any>(null);

  useEffect(() => {
    getProducts()
      .then((response) => {
        setProducts(response);
        setProductsLoaded(true);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Road pageName="Products" pageUrl="/products" />
      <GlobalContainer>
        <TopFilterContextProvider>
          <FilterBar
            filterMenuOpened={filterMenuOpened}
            setFilterMenuOpened={setFilterMenuOpened}
          />
          <P.Wrapper>
            <FilterContextProvider>
              <P.ProductsFilterWrapper ref={filterMenuWrapperRef}>
                {filterMenuOpened ? <FilterMenu /> : null}
              </P.ProductsFilterWrapper>
              <P.ProductsItemsWrapper>
                {productsLoaded ? (
                  <ProductsTable
                    setProducts={setProducts}
                    products={products}
                  />
                ) : (
                  <Spinner />
                )}
                {products.length === 0 && productsLoaded && (
                  <Alert message="Can't filter that product out, try resetting your filters!" />
                )}
              </P.ProductsItemsWrapper>
            </FilterContextProvider>
          </P.Wrapper>
        </TopFilterContextProvider>
      </GlobalContainer>
      <Brands />
    </>
  );
};
