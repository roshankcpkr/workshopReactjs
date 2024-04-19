import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Products from "./pages/products/Products";
import RootLayout from "./pages/RootLayout";
import ProductDetailPage from "./pages/products/ProductDetailPage";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Settings from "./pages/settings/Setting";
import Order from "./pages/orders/Order";
import ProtectedRoute from "./pages/ProtectedRoute";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/orders" element={<Order />} />
        </Route>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<div>About</div>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
