import './App.css'

import{ Header,Footer }from "./component/main"
import { AllRoutes } from './routes/AllRoutes'


function App() {
  
   
  return (
    <>
    <Header></Header>
    <main>
      <AllRoutes></AllRoutes>
     </main>
     <Footer></Footer>  
    </>
  )
}

export default App
