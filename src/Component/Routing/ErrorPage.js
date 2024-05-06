import React from 'react'
import Error from '../Pages/Error'
import { Route, Routes } from "react-router-dom";


const ErrorPage = () => {
  return (
    <>
        <Routes>
            <Route exact path="*" element={<Error/>}/>
        </Routes>
    </>
  )
}

export default ErrorPage
