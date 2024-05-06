import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductCard from "../Pages/ProductCard";
import CardDetails from "../Pages/CardDetails";
import OrderDetails from "../Pages/OrderDetails";
import ProductNoFound from "../Pages/ProductNoFound";
import ProductDetails from "../Pages/ProductDetails";
import ProfileDetails from "../Pages/ProfileDetails";

const Private = () => {
  return (
    <Routes>
      <Route exact path="/" element={<ProductCard />} />
      <Route exact path="/product/:id" element={<ProductDetails/>} />
      <Route path="/cart" element={<CardDetails />} />
      <Route path="/order" element={<OrderDetails />} />
      <Route path="/nofound" element={<ProductNoFound/>}/>
      <Route path="/profile" element={<ProfileDetails/>}/>
    </Routes>
  );
};

export default Private;
