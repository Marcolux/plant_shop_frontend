import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from "axios"


const SingleOrder=()=>{

    
    const [info, setInfo] = useState([])
    
    const {orderId} = useParams()
    console.log(orderId)

    useEffect(()=> {
        const getOrder = async () => {
            try{ 
                let response = await axios.get(`http://localhost:3001/order/orderinfo/${orderId}`)
                console.log(response.data)
                setInfo(response.data)
            }catch (err) {
                console.log(err)
            }
        }
        getOrder()
    }, [orderId])


    return(
      


        
        <div className ="SingleOrder">
            {info.order ?
            <div className="orderPage">
            <h4>Order Number{info.order.id}</h4>
            <h4>Items:</h4>
            <p>
                {info.plants.map((item, i)=> {
                    return(
                        <div key={i} className="itemPrice">
                            <p>{item.name}</p>
                            <p> ${item.price}</p>
                        </div>
                    )
                })}
            </p>
            <h3> Total Price: ${info.order.total_price}</h3>
            <h3>{info.order.date}</h3>
            </div>
            :
            <h4>Loading...</h4>
            }
            
        </div>
    )


}

export default SingleOrder