import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'


const Orders =(props)=>{

    const [userOrders, setUserOrders] = useState([])


    useEffect(()=>{
    const getOrders = async (req, res) => {
        try{
            let orders = await axios.get(`http://localhost:3001/order/${props.user.id}`)

            setUserOrders(orders.data.orders)
        }catch (err) {
            console.log(err)
        }
    }
    getOrders() 
    },[props.user.id])
    return (
        <div className="PrevOrders"> 
        <h2>Previous Orders</h2>
        
        {userOrders.map((item, i) => {
            return (
                <div key = {i} className="singleOrder">
                        <p>Order number: {item.id} </p>
                        <p>Order price: $ {item.total_price}</p>
                        <Link className="orderlink" to={`/orders/${item.id}`}><p className="dateCheckout">{item.date}</p> </Link>
                </div>
            )
        })
        }



        </div>
    )
}
export default Orders