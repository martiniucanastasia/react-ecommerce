import { Road } from "../../layout/Road/Road";
import { GlobalContainer } from "../../styles/global";
import { Button } from "../../components/Button/Button";

import { ReactComponent as CheckSvg } from "../../assets/images/lil-check.svg";
import { TotalsAndShippingBoxes as T } from "./CartStyled";
import { CartStyled as S } from "./CartStyled";
import { useCartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

import { Alert } from "../../components/Alert/Alert";

export const Cart = () => {
  const {
    cartProducts,
    removeProductFromCart,
    changeProductQuantity,
    clearCart,
  } = useCartContext();

  const allProductsTotal = cartProducts.reduce((acc, cur) => {
    return acc + cur.quantity! * cur.price;
  }, 0);

  const navigate = useNavigate();

  return (
    <>
      <Road pageName="Cart" pageUrl={`/cart`} />
      <GlobalContainer>
        <S.CartWrapper>
          {cartProducts.length < 1 ? (
            <Alert message="Your cart is empty!" />
          ) : (
            <>
              {/* Left Side */}
              <S.CartInfo>
                <S.CartInfoHeading>
                  <h2>Product</h2>
                  <h2>Price</h2>
                  <h2>Quantity</h2>
                  <h2>Total</h2>
                </S.CartInfoHeading>
                <div>
                  {cartProducts.map((product) => {
                    return (
                      <S.CartItem key={product.id}>
                        <S.CartItemWrapper>
                          <S.CartImage>
                            <img src={product.thumbnail} alt={product.title} />
                            <S.DeleteProduct
                              onClick={() => removeProductFromCart(product.id)}
                            >
                              &times;
                            </S.DeleteProduct>
                            <S.CartTitle>{product.title}</S.CartTitle>
                          </S.CartImage>

                          <S.PriceBox>${product.price}</S.PriceBox>
                          <S.QuantityWrapper>
                            <S.QuantityBox>
                              <S.QuantityButton
                                onClick={() =>
                                  changeProductQuantity(product.id, -1)
                                }
                              >
                                -
                              </S.QuantityButton>
                              <span>{product.quantity!}</span>
                              <S.QuantityButton
                                onClick={() =>
                                  changeProductQuantity(product.id, 1)
                                }
                              >
                                +
                              </S.QuantityButton>
                            </S.QuantityBox>
                          </S.QuantityWrapper>

                          <S.TotalBox>
                            ${product.quantity! * product.price}
                          </S.TotalBox>
                        </S.CartItemWrapper>
                      </S.CartItem>
                    );
                  })}
                  <S.ButtonsContainer>
                    <Button onClick={clearCart} variant="primary">
                      Clear Cart
                    </Button>
                  </S.ButtonsContainer>
                </div>
              </S.CartInfo>
              {/* Right side */}
              <T.CartCheckout>
                <T.CartCheckoutBlock>
                  <h2>Cart Totals</h2>
                  <T.Box>
                    <T.SmallWrapper>
                      <T.TextTotal>Subtotals:</T.TextTotal>
                      <T.CalcPrice>$ {allProductsTotal}</T.CalcPrice>
                    </T.SmallWrapper>
                    <T.SmallWrapper>
                      <T.TextTotal>Totals:</T.TextTotal>
                      <T.CalcPrice>$ {allProductsTotal}</T.CalcPrice>
                    </T.SmallWrapper>
                    <CheckSvg />
                    <T.AddInfo>
                      Shipping & taxes calculated at checkout
                    </T.AddInfo>
                    <T.ButtonCheckoutBox>
                      <Button
                        onClick={() => navigate("/checkout")}
                        variant="secondary"
                      >
                        Proceed To Checkout
                      </Button>
                    </T.ButtonCheckoutBox>
                  </T.Box>
                </T.CartCheckoutBlock>
                <T.CartCheckoutBlock>
                  <h2>Calculate Shipping</h2>
                  <T.Box>
                    <T.SmallWrapper>
                      <p>Bangladesh</p>
                    </T.SmallWrapper>
                    <T.SmallWrapper>
                      <p>Mirpur Dhaka - 1200</p>
                    </T.SmallWrapper>
                    <T.SmallWrapper>
                      <p>Postal Code</p>
                    </T.SmallWrapper>
                    <Button variant="primary">Calculate Shipping</Button>
                  </T.Box>
                </T.CartCheckoutBlock>
              </T.CartCheckout>
            </>
          )}
        </S.CartWrapper>
      </GlobalContainer>
    </>
  );
};
