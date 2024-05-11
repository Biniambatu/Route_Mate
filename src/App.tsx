import { Routes, Route } from "react-router-dom"
import './App.css'
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
    <main>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/employee" element={<Employee/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </main>
     <Footer></Footer>  
    </>
  )
}

export default App
