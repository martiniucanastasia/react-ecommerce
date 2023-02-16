import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductType } from "../../types";

import { ProductDetailsStyled as D } from "./ProductDetailsStyled";
import { GlobalContainer } from "../../styles/global";
import { ProductTabs } from "./ProductTabs/ProductTabs";
import { RelatedProducts } from "./RelatedProducts/RelatedProducts";

import { Road } from "../../layout/Road/Road";
import { Spinner } from "../../components/Spinner/Spinner";
import { Brands } from "../../components/Brands/Brands";
import { Rating } from "../../components/Rating/Rating";

import { ReactComponent as HeartSvg } from "../../assets/images/heart.svg";
import { ReactComponent as FacebookSvg } from "../../assets/images/facebook.svg";
import { ReactComponent as InstagramSvg } from "../../assets/images/inst.svg";
import { ReactComponent as TwitterSvg } from "../../assets/images/twitter.svg";
import { useCartContext } from "../../context/CartContext";

export const ProductDetails = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [product, setProduct] = useState<ProductType>({} as ProductType);
  const [isLiked, setIsLiked] = useState(false);

  const params = useParams();

  const { addProductToCart } = useCartContext();

  useEffect(() => {
    fetch(`http://localhost:3000/products`, {
      referrer: "http://localhost:3000",
      method: "GET",
    })
      .then((response) => response.json())
      .then((products) => {
        setProducts(products);
        products.filter((product: ProductType) => {
          if (product.id.toString() === params.id) {
            setProduct(product);
          }
        });
      })
      .catch((error) => console.log(error));
  }, [params.id]);

  return (
    <>
      <Road pageName="Product Details" pageUrl={`/product/${params.id}`} />
      <GlobalContainer>
        <D.Box>
          {product.id ? (
            <D.Info>
              <D.Pictures>
                {product.images.slice(0, 3).map((image, idx) => {
                  return <img key={idx} src={image} alt={product.title} />;
                })}
              </D.Pictures>
              <D.GeneralInfo>
                <img src={product.thumbnail} alt={product.title} />
                <D.InfoBox>
                  <D.Title>{product.title}</D.Title>
                  <D.Rating>
                    <Rating rating={product.rating} />
                  </D.Rating>
                  <D.Prices>
                    <D.PriceNew>${product.price}</D.PriceNew>
                    <D.PriceOld>
                      $
                      {(
                        product.price +
                        (product.price / 100) * product.discountPercentage
                      ).toFixed(0)}
                    </D.PriceOld>
                  </D.Prices>
                  <D.Description>{product.description}</D.Description>
                  <D.Buttons>
                    <D.Button onClick={() => addProductToCart(product)}>
                      Add to cart
                    </D.Button>
                    <D.Button
                      onClick={() => setIsLiked((current) => !current)}
                      isLiked={isLiked}
                    >
                      <HeartSvg />
                    </D.Button>
                  </D.Buttons>
                  <D.ParametersBox>
                    <D.Parameters>Category: {product.category}</D.Parameters>
                    <D.ShareBox>
                      <D.Parameters>Share</D.Parameters>
                      <D.LinkBox>
                        <D.Link href={"https://www.facebook.com/"}>
                          <FacebookSvg />
                        </D.Link>
                        <D.Link href={"https://www.instagram.com/"}>
                          <InstagramSvg />
                        </D.Link>
                        <D.Link href={"https://twitter.com/"}>
                          <TwitterSvg />
                        </D.Link>
                      </D.LinkBox>
                    </D.ShareBox>
                  </D.ParametersBox>
                </D.InfoBox>
              </D.GeneralInfo>
            </D.Info>
          ) : (
            <Spinner />
          )}
        </D.Box>
      </GlobalContainer>
      {product.id ? <ProductTabs product={product} /> : <Spinner />}

      <RelatedProducts relatedProducts={products.slice(0, 4)} />
      <Brands />
    </>
  );
};
