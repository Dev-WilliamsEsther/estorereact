import React, { useState } from 'react'
import '../../styles/login.css'
import axios from 'axios'

const Login = () => {
    const [loadState, setLoadState] = useState(false)
    const [userInputs, setUserInput] = useState(
        {
            email: '',
            password: ''
        }
    )

   const Api = 'https://movie-app-ch5.onrender.com/api'

    const handleLogin = async () =>{
        try{
            setLoadState(true)
            const ress = await axios.post(Api, userInputs)
            

        }catch(err){

        }finally{

        }
    }



  return (
    <div className='loginwrapper'>
        <div className='deets1'>
            <div className='logdetails'>
                <h2>Welcome Back,Bridget</h2>
                <p>Please fill in your details</p>
                <div className='email'>
                    <div className='nametext'>Email</div>
                    <input type="email" placeholder='Email' className='input' 
                    onChange={(e)=> setUserInput((prev)=> ({...prev, email: e.target.value}))}
                    />
                </div>
                <div className='password'>
                    <div className='nametext'>Password</div>
                    <input type="password" placeholder='Password' className='input' 
                    onChange={(e)=> setUserInput((prev)=> ({...prev, password: e.target.value}))}
                    />
                </div>
                <u>Forgot Password?</u>
                <div className='login'>
                    <h4>Log In</h4>
                </div>
                <div className='ifelse'>
                    <p>Don't have an account?<b>Signup</b></p>
                </div>
            </div>
        </div>
        <div className='deets2'></div>
    </div>
  )
}

export default Login