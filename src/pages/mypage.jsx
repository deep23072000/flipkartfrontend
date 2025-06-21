import axios from "axios"
import { useEffect, useState } from "react"

const Mypage = ()=>{
    const [productdata,setProductdata] = useState([])
    useEffect(()=>{
        const fetchdata = async ()=>{
            const res = await axios.get("http://127.0.0.1:3000/getproduct")
            const re = await res.data
            setProductdata(re)
        }
        fetchdata()
    },[])

    console.log(productdata)
    return(
        <>
        

        <div style={{display:"grid",gridTemplateColumns:"auto auto auto",justifyContent:"space-evenly"}}>
            {
                productdata.map(items=>(
                    <div key={items._id}>
                        <div>{items.pname}</div>
                        <div><img width={100} src={items.pimage} alt="" /></div>
                        <div>{items.pprice}</div>
                        <div>{items.pdescription}</div>

                    </div>
                ))
            }
        </div>
        </>
    )
}

export default Mypage