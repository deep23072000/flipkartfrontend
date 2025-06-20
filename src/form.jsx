import axios from "axios"
import { useState } from "react"

const Form = ()=>{
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [mobile,setMobile] = useState(0)
    const [password,setPassword] = useState("")

    const obj = {
        "name":name,
        "email":email,
        "mobile":mobile,
        "password":password
    }

    console.log(obj)

    const sub = ()=>{
        axios.post("http://127.0.0.1:3000/reg",obj)
    }
    return(
        <>

            <input type="text" value={name} placeholder="Enter name" onChange={(e)=>setName(e.target.value)}/>

            <input type="text" value={email} placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>

            <input type="text" value={mobile} placeholder="Enter mobile" onChange={(e)=>setMobile(e.target.value)}/>

            <input type="text" value={password} placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)}/>

            <button onClick={sub}> sub </button>
        </>
    )
}

export default Form