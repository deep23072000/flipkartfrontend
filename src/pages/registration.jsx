import { useEffect, useState } from "react"
import "../assets/registration.css"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
const Registration = ()=>{
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [mobile,setMobile] = useState("")
    const [password,setPassword] = useState("")
    const [blankform,setBlankform] = useState("")

    const obj = {
        "name":name,
        "email":email,
        "mobile":mobile,
        "password":password
    }


    console.log(obj)

    const sub = async()=>{
      await axios.post('http://127.0.0.1:3000/regdata',obj)
    }


    return(
        <>
        <form onSubmit={sub} >
            <div className="container">
    <h2>Create Account</h2>
      <div className="form-group">
        <label for="fullname">Full Name</label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} id="fullname" placeholder="Enter your full name" required />
      </div>

      <div className="form-group">
        <label for="email">Email Address</label>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} id="email" placeholder="Enter your email" required />
      </div>

      <div className="form-group">
        <label for="mobile">Mobile Number</label>
        <input type="tel" value={mobile} onChange={(e)=>setMobile(e.target.value)} id="mobile" placeholder="Enter your mobile number" required />
      </div>

      <div className="form-group">
        <label for="password">Create Password</label>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} id="password" placeholder="Enter a strong password" required />
      </div>

      <button className="btn">Register</button>
    <div className="login-link">
      Already have an account? <Link to="/login">Log in</Link>
    </div>
  </div>
  </form>
        </>
    )
}

export default Registration