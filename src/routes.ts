export const clientRoutes = {};

export const apiRoutes = {
  products: "/products",
  productDetails: (id: string) => `product/${id}`,
  filters: "/filters",
  cart: "/cart",
};
