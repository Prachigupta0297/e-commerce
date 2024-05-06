import React, { useEffect } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
  MDBInputGroup
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { getCartTotal} from '../features/cartSlice';
import { logout } from '../features/authSlice';
import { useSelector, useDispatch } from 'react-redux';
import {searchUser} from '../features/cartSlice';
import { useState } from 'react';

export default function Navbar() {
  const dispatch = useDispatch();

  const {totalQuantity,cart} = useSelector((state)=>state.allcart);
  // const users = useSelector((state)=>state.authuser.users.name)
  const users = useSelector((state) => state.authuser.users ? state.authuser.users.email: "Guest");
  const [searchData, setSearchData] = useState("");
  // const logoutHandle = () => {
  //   dispatch(logout());
  // };


  useEffect(()=>{
    let timerOut =setTimeout(()=> {
      dispatch(searchUser(searchData));
    },1000);
    return ()=> clearTimeout(timerOut);
  },[searchData]);

  useEffect(()=>{
    dispatch(getCartTotal());
},[cart])

  return (
    <MDBNavbar className='text-light bg-dark'>
      <MDBContainer fluid>
 
        {/* <MDBNavbarBrand>Fashion</MDBNavbarBrand> */}
        <Link to="/profile"><MDBNavbarBrand className='text-light'>Hii {users} !</MDBNavbarBrand></Link>
        <MDBInputGroup tag="form" className='d-flex w-auto mb-3'>
          <input className='form-control' placeholder="Type query" aria-label="Search" type='Search' onChange={(e)=> setSearchData(e.target.value)} />
          <MDBBtn outline>Search</MDBBtn>
        </MDBInputGroup>
        <span><Link to="/">All Product</Link></span>
        <Link to="/cart"><MDBBtn color='secondary'>
          Cart({totalQuantity})</MDBBtn></Link>

{
  users ?
  <Link to="/login"><MDBBtn color='secondary' onClick={()=> dispatch(logout())}>Log</MDBBtn></Link>
  :
  <Link to="/login"><MDBBtn color='secondary'>Log</MDBBtn></Link>
}
          
          
     
      </MDBContainer>
    </MDBNavbar>
  );
}