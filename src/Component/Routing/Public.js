import React from 'react'
import { Route, Routes} from "react-router-dom";
import Login from '../auth/Login';
import Register from '../auth/Register';
import ProductCard from '../Pages/ProductCard';
import Page404 from '../Pages/Page404';
import ProductNoFound from '../Pages/ProductNoFound';


const Public = () => {
  return (

<Routes>
    <Route exact path="/" element={<ProductCard />} />
    <Route  exact path="/register" element={<Register />} />
    <Route  exact path="/login" element={<Login />} />
    <Route path="/nofound" element={<ProductNoFound/>}/>

    {/* <Route path="*" element={<Page404/>}/> */}
  </Routes>
  )
}

export default Public
