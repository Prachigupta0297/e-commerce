import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import ProductCard from "./Component/Pages/ProductCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardDetails from "./Component/Pages/CardDetails";
import OrderDetails from "./Component/Pages/OrderDetails";
import Login from "./Component/auth/Login";
import MainRoutes from "./Component/Routing/MainRoutes";

function App() {
  return (
    <>

      <h1>E-Commerce</h1>
      
       <MainRoutes/>
    </>
  );
}

export default App;









{/* <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<ProductCard />} />
          <Route path="/cart" element={<CardDetails />} />
          <Route path="/order" element={<OrderDetails />} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter> */}
