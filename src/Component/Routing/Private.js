import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductCard from "../Pages/ProductCard";
import CardDetails from "../Pages/CardDetails";
import OrderDetails from "../Pages/OrderDetails";
import ProductNoFound from "../Pages/ProductNoFound";
import ProductDetails from "../Pages/ProductDetails";
import ProfileDetails from "../Pages/ProfileDetails";
import Page404 from "../Pages/Page404";
import Error from "../Pages/Error";
const Private = () => {
  return (
    <Routes>
      <Route exact path="/" element={<ProductCard />} />
      <Route exact path="/product/:id" element={<ProductDetails/>} />
      <Route exact path="/cart" element={<CardDetails />} />
      <Route exact path="/order" element={<OrderDetails />} />
      <Route exact path="/nofound" element={<ProductNoFound/>}/>
      <Route exact path="/profile" element={<ProfileDetails/>}/>
       <Route exact path="*" element={<Error/>}/>
    </Routes>
  );
};

export default Private;
