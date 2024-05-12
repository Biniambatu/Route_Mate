import { Routes, Route, Navigate } from "react-router-dom"
import './App.css'
import {Home,Employee,Login,ContactETH,PageNotFound,ContactEU,ContactUS, Contact }from './Page/index'

import{ Header,Footer }from "./component/main"


function App() {
  
   const user = true
  return (
    <>
    <Header></Header>
    <main>
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
     </main>
     <Footer></Footer>  
    </>
  )
}

export default App
