import { useState } from 'react'
import axios from 'axios'

// import env from 'react-dotenv'
// import { Link } from 'react-router-dom'

const Login =(props)=>{
  console.log('hi')
    const [email, setEmail] = useState('')
 
    const [password, setPassword] = useState('')

    const loginForm = (e) => {

        e.preventDefault()
        axios.post(`http://localhost:3001/user/login`, { email, password })
        .then((response) => {
            console.log(response)

        localStorage.setItem('userId', response.data.user.id)
        props.setUser(response.data.user)
    })
}
    return(
        
        <div className="sgnLogForm">
           
        <h2>Login</h2>
        
        <form className="LgnFrmCont" onSubmit={loginForm}>
            <div className='formInput'>
                <label htmlFor="email">Email:</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='formInput'>
                <label htmlFor="password">Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className='formInput'>
                <input className='formButton' type="submit" value="Log In" />
            </div>
        </form>
        <div className="NavigateHome">
        
        </div>
        
        </div>
        
    )
}

export default Login