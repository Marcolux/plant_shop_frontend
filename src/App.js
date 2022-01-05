import './App.css';

import { Routes, Route, Navigate } from 'react-router-dom';
import { useState , useEffect } from 'react';

import axios from 'axios'
// import env from 'react-dotenv'

import NavigationBar from './components/NavigationBar';
import Login from './pages/Login'
import Home from './pages/Home';
import Signup from './pages/SignUp'
import Cart from './pages/Cart';
import Orders from './pages/Orders';
import ItemDetails from './components/ItemDetails';
import Checkout from './pages/Checkout';
import SingleOrder from './components/SingleOrder';

function App() {

  const [user, setUser] = useState({})
  const [allPlants, setAllPants] = useState([])
  const [cartList, setCartList] = useState([])
  const [total_price, setTotal] = useState(0)
  const [order, setOrder] = useState(false)
  
  
  useEffect(()=>{
    const fetchUser = () => {
    const userId = localStorage.getItem('userId')
    if (userId) {
       
      axios.get(`http://localhost:3001/user/verify`, {
        headers: {
          Authorization: userId
        }
      })
      .then((response) => {
        
        setUser(response.data.user)
      })
    }
  }
  fetchUser()
}, [user.id])

const deleteItem= (i)=>{
  cartList.splice(i,1)
  let array = cartList
  console.log('app.js cart list',array)
  setCartList(array)


}
 



  useEffect(()=>{
  const fetchPlants =async()=>{

    const plants = await axios.get(`http://localhost:3001/plant`)
    setAllPants(plants.data.plants)
    

  }
   fetchPlants()
  },
  [])
  
  
  
  return (
    <div className="App">
    <NavigationBar setUser={setUser} user={user} cartList={cartList} setCartList={setCartList} setTotal={setTotal}/>
    <Routes>
        <Route path="/" element={<Home allPlants={allPlants}/>}/>
        <Route path="/:id" element={<ItemDetails user={user} cartList={cartList} setCartList= {setCartList} total_price={total_price} setTotal={setTotal}/>} />
        <Route path="/login" 
        element={
          user.id ?
          <Navigate to="/"/>
          :
          <Login setUser={setUser} user={user}/>}
          />
          
        <Route path="/signup" element={
          user.id ?
          <Navigate to="/"/>
          :
          <Signup setUser={setUser} user={user}/>}/>

        <Route path="/cart" element={
        user.id ?
        <Cart cartList={cartList} setCartList={setCartList} total_price={total_price} setTotal={setTotal} deleteItem={deleteItem}/>
        :
        <Navigate to="/"/>
      }
        />
        <Route path="/cart/checkout" element={
          user.id ?
          <Checkout user={user} total_price={total_price} setTotal={setTotal} cartList={cartList} setCartList={setCartList} order={order} setOrder={setOrder}/>
        :
        <Navigate to="/"/>
        }/>
        <Route path="/orders" element={
          user.id ?
        <Orders user={user}/>
      :
      <Navigate to="/"/>
      }/>
      <Route path="/orders/:orderId" element={
         user.id ?
      <SingleOrder />
      :
      <Navigate to="/"/>} />
        <Route path="/" element={<Home/>}/>

    </Routes>
    </div>
  );
}

export default App;
