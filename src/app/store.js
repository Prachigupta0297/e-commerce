import {configureStore} from "@reduxjs/toolkit";
import CartReducer from "../Component/features/cartSlice"
import AuthReducer from "../Component/features/authSlice"

export const store = configureStore({
   reducer:{
       allcart: CartReducer,
       authuser : AuthReducer
   },
});

