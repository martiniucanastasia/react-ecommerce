import { useCartContext } from "../../context/CartContext";
import { ProductType } from "../../types";

export const Checkout = () => {
  const { cartProducts } = useCartContext();

  return (
    <div>
      <h1>Checkout</h1>
      <p>
        {cartProducts.map((product: ProductType) => {
          return (
            <div>
              <h1>{product.title}</h1>
            </div>
          );
        })}
      </p>
    </div>
  );
};
