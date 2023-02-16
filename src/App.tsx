import { Routes, Route, Navigate } from "react-router-dom";
import { CartContextLayout } from "./context/CartContext";

// Layout
import { Header } from "./layout/Header/Header";
import { Topbar } from "./layout/Topbar/Topbar";
import { Footer } from "./layout/Footer/Footer";
import { Copyright } from "./layout/Copyright/Copyright";

// Pages
import { Home } from "./pages/Home/Home";
import { Cart } from "./pages/Cart/Cart";
import { Checkout } from "./pages/Checkout/Checkout";
import { Products } from "./pages/Products/Products";
import { ProductDetails } from "./pages/ProductDetails/ProductDetails";

export const App = () => {
  return (
    <>
      <Topbar />
      <Header />
      <Routes>
        <Route element={<CartContextLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
      <Footer />
      <Copyright />
    </>
  );
};
