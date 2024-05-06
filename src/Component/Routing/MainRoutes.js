import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Public from './Public'
import Private from './Private'
import Navbar from '../Navbar/Navbar'
import { useSelector } from 'react-redux'


const MainRoutes = () => {

    const user = useSelector((state)=>state.authuser.users)

  return (
    <BrowserRouter>
        <Navbar/>
        {/* { user ? <Private/> : <Public/>} */}
        <Private/>
        <Public/>
       
         
    </BrowserRouter>
  )
}

export default MainRoutes
