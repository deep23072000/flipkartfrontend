import Navbar from "./components/navbar.jsx"
import Topbar from "./components/topbar.jsx"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Login from "./pages/login.jsx"
import Registration from "./pages/registration.jsx"
import VerifyOTP from "./pages/otp.jsx"
import Home from "./pages/home.jsx"

const App = ()=>{
  return(
  <>
    
    <BrowserRouter>
      <Topbar></Topbar>
      <Navbar></Navbar>
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/registration" element={<Registration></Registration>}></Route>
        <Route path="/otp" element={<VerifyOTP></VerifyOTP>}></Route>
      </Routes>
    </BrowserRouter>
  </>
  )
}
export default App

//npm install react-router-dom
