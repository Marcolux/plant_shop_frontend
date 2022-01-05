
import { Link } from "react-router-dom"



const Cart=(props)=>{
    
 

return(
    <div className="Cart">
        <h1 className="cartTitle">Your Cart</h1>
        {console.log('cart list',props.cartList)}
           {
               
               props.cartList.map((item, i) => {
                console.log('item',item)
                return(
                    <div key={i} className="cartItem">
                        <h4>{item.name}</h4> 
                        <p>- $ {item.price}</p>
                        <button onClick={()=>{
                            props.deleteItem(i)
                            props.setCartList([...props.cartList])
                            props.setTotal(Number(props.total_price) - Number(item.price))
                            }}>Remove Item</button>
                    </div>

                )
            } )
            }
            <p>$ {props.total_price}</p>
                <Link to='/cart/checkout'><h2 className="cheCkout">Proceed to Checkout</h2></Link>

        </div>
    )
}
export default Cart