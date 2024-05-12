import React from 'react'
import {Home,Employee,Login,ContactETH,PageNotFound,ContactEU,ContactUS, Contact }from '../Page/index'
import { Routes, Route, Navigate } from "react-router-dom"

export const AllRoutes = () => {
    const user = true
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/employee" element={<Employee/>}></Route>
        <Route path="/contact" element={<Contact/>}>
          <Route path="ETH" element={<ContactETH/>}/>
          <Route path="EU" element={<ContactEU/>}/>
          <Route path="US" element={<ContactUS/>}/>
          <Route path="*" element={<Contact/>}/>
        </Route>
        <Route path="/login" element={user? <Navigate to={'/employee'}/> : <Login/>}></Route>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </>
  )
}
