// import React from 'react'
// import { Route, Routes} from "react-router-dom";
// import Login from '../auth/Login';
// import Register from '../auth/Register';
// import ProductCard from '../Pages/ProductCard';
// import Page404 from '../Pages/Page404';
// import ProductNoFound from '../Pages/ProductNoFound';


// const Public = () => {
//   return (

// <Routes>
//     <Route exact path="/" element={<ProductCard />} />
//     <Route  exact path="/register" element={<Register />} />
//     <Route  exact path="/login" element={<Login />} />
//     <Route exact path="/nofound" element={<ProductNoFound/>}/>

//     <Route  element={<Page404/>}/>
//   </Routes> 
//   )
// }

// export default Public


import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from '../auth/Login';
import Register from '../auth/Register';
import ProductCard from '../Pages/ProductCard';
import Page404 from '../Pages/Page404';
import ProductNoFound from '../Pages/ProductNoFound';
import Error from '../Pages/Error';

const Public = () => {
  return (
    <Routes>
      <Route exact path="/" element={<ProductCard />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/notfound" element={<ProductNoFound />} />
    </Routes>
  );
};

export default Public;

