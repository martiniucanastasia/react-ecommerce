import { useEffect, useState } from "react";

import { getProducts } from "../../requests/products";
import { ProductType } from "../../types";

// Hierarchy
import { MainSlider } from "./MainSlider/MainSlider";
import { FeaturedSlider } from "./FeaturedSlider/FeaturedSlider";
import { LatestTabs } from "./LatestTabs/LatestTabs";
import { Offers } from "./Offers/Offers";
import { DiscountTabs } from "./DiscountTabs/DiscountTabs";
import { CategoriesSlider } from "./CategoriesSlider/CategoriesSlider";
import { Subscribe } from "./Subscribe/Subscibe";
import { Brands } from "../../components/Brands/Brands";
import { Blog } from "./Blog/Blog";

export const Home = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    getProducts()
      .then((response) => setProducts(response))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <MainSlider />
      <FeaturedSlider swiperProducts={products.slice(0, 7)} />
      <LatestTabs latestProducts={products} />
      <Offers />
      <DiscountTabs />
      <CategoriesSlider topProducts={products.slice(0, 7)} />
      <Subscribe />
      <Brands />
      <Blog />
    </>
  );
};
