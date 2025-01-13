import React from "react";
import { Route, Routes } from "react-router-dom";
import Store from "../pages/Store";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import OrderSuccess from "../pages/OrderSuccess";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Store />} />
    <Route path="/product/:id" element={<ProductDetails />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/order-success" element={<OrderSuccess />} />{" "}
  </Routes>
);

export default AppRoutes;
