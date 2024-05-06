import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Public from "./Public";
import Private from "./Private";
import Navbar from "../Navbar/Navbar";
import { useSelector } from "react-redux";
import ErrorPage from "./ErrorPage";




const MainRoutes = () => {
  const user = useSelector((state) => state.authuser.users);

  return (
    <BrowserRouter>
      <Navbar />
      { user ? <Private/> : <Public/>}
      {/* <Private />
      <Public /> */}
      {/* <ErrorPage/> */}
      
   
    </BrowserRouter>
  );
};

export default MainRoutes;
