import { Outlet } from "react-router-dom";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";
import { ProductType } from "../types";

type CartContextType = {
  cartProducts: ProductType[];
  setCartProducts: Dispatch<SetStateAction<ProductType[]>>;
  addProductToCart: (item: ProductType) => void;
  removeProductFromCart: (productId: number) => void;
  changeProductQuantity: (productId: number, operation: number) => void;
  clearCart: () => void;
};

export const CartContext = createContext<CartContextType>(
  {} as CartContextType
);

export const CartContextLayout = () => {
  const [cartProducts, setCartProducts] = useState<ProductType[]>([]);

  const addProductToCart = (item: ProductType) => {
    alert(`Going to add ${item.title} to the cart`);

    if (cartProducts.some((cartItem) => cartItem.id === item.id)) {
      setCartProducts((prev: ProductType[]) => {
        return prev.map((cartItem) => {
          if (cartItem.id === item.id) {
            return {
              ...cartItem,
              quantity: cartItem.quantity! + 1,
            };
          } else {
            return cartItem;
          }
        });
      });
      return;
    }
    setCartProducts((prev: ProductType[]) => [
      ...prev,
      { ...item, quantity: 1 },
    ]);
  };

  const removeProductFromCart = (productId: number) => {
    alert(`Going to delete item with id ${productId}`);
    setCartProducts((prev: ProductType[]) =>
      prev.filter((item) => item.id !== productId)
    );
  };

  const changeProductQuantity = (productId: number, operation: number) => {
    alert(`For item with id ${productId}, quantity will be ${operation}`);
    setCartProducts((cart: ProductType[]) => {
      return cart.flatMap((cartItem) => {
        if (cartItem.id === productId) {
          if (cartItem.quantity! + operation < 1) {
            return [];
          } else {
            return [
              {
                ...cartItem,
                quantity: cartItem.quantity! + operation,
              },
            ];
          }
        } else {
          return [cartItem];
        }
      });
    });
  };

  const clearCart = () => {
    alert(`Clear all items in the cart`);
    setCartProducts([]);
  };

  const contextValue = useMemo(() => {
    return {
      cartProducts,
      setCartProducts,
      addProductToCart,
      removeProductFromCart,
      changeProductQuantity,
      clearCart,
    };
  }, [
    cartProducts,
    setCartProducts,
    addProductToCart,
    removeProductFromCart,
    changeProductQuantity,
    clearCart,
  ]);

  return (
    <CartContext.Provider value={contextValue}>
      <Outlet />
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
