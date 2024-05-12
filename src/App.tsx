import { Routes, Route, Navigate } from "react-router-dom"
import './App.css'
import Home from "./Page/Home"
import Employee from "./Page/Employee"
import Login from "./Page/Login"
import Contact from "./Page/Contact"
import Header from "./component/Header"
import Footer from "./component/Footer"
import PageNotFound from "./Page/PageNotFound"
import ContactETH from "./Page/contactETH"
import ContactEU from "./Page/contactEU"
import ContactUS from "./Page/contactUS"
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
