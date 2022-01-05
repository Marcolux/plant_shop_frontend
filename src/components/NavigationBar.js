import { Link,  } from "react-router-dom"




const NavigationBar = (props)=>{
return(
    <div className="NavBar">
        <Link className="NavLink" to="/">Home</Link>
        { props.user.id ?
        <>
        <div className="userCorner">
        <h4>{props.user.name}</h4>
        <p className="logout" onClick={()=>{
            localStorage.removeItem('userId')
            props.setUser({})
            props.setCartList([])
            props.setTotal(0)
        }}>Logout</p>
        </div>
        <Link className="NavLink" to="/cart">Cart ({props.cartList.length})</Link>
        <Link  className="NavLink"to="/orders">Previous Orders</Link>
        </>
        :
        <>
        <Link className="NavLink" to="/login" >Login</Link>
        <Link className="NavLink" to="/signup">Signup</Link>
        
        
        </>
}
    </div>
)

}

export default NavigationBar