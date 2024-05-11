import { Routes, Route } from "react-router-dom"
import Home from "./Page/Home"
import Employee from "./Page/Employee"
import Login from "./Page/Login"
import Contact from "./Page/Contact"
import Header from "./component/Header"
import Footer from "./component/Footer"
function App() {
  

  return (
    <>
    <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/employee" element={<Employee/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
     <Footer></Footer> 
    </>
  )
}

export default App
