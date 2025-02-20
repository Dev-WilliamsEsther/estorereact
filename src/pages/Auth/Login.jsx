import React, { useState } from 'react'
import '../../styles/login.css'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router'

const Login = () => {
    const [loadState, setLoadState] = useState(false)
    const [userInputs, setUserInput] = useState(
        {
            email: '',
            password: ''
        }
    )

   const Api = 'https://movie-app-ch5.onrender.com/api/user/log-in'

    const handleLogin = async () =>{
        if(!userInputs.email && !userInputs.password){
            toast.error('input all field')
        }
        try{
            setLoadState(true)
            const ress = await axios.post(Api, userInputs)
            if(ress.status === 200){
                localStorage.setItem('userData', JSON.stringify(ress.data))
                toast.success('Loged in Successful')
            }

        }catch(err){
            toast.error(err.response?.data?.message || 'Login failed')
        }finally{
            setLoadState(false)
        }
    }

    const navigate = useNavigate()



  return (
    <div className='loginwrapper'>
        <ToastContainer/>
        <div className='deets1'>
            <div className='logdetails'>
                <h2>Welcome Back,Bridget</h2>
                <p>Please fill in your details</p>
                <div className='email'>
                    <div className='nametext'>Email</div>
                    <input type="email" placeholder='Email' className='input' 
                    onChange={(e)=> setUserInput((prev)=> ({...prev, email: e.target.value}))}
                    value={userInputs.email}
                    />
                </div>
                <div className='password'>
                    <div className='nametext'>Password</div>
                    <input type="password" placeholder='Password' className='input' 
                    onChange={(e)=> setUserInput((prev)=> ({...prev, password: e.target.value}))}
                    value={userInputs.password}
                    />
                </div>
                <u>Forgot Password?</u>
                <div className='login' onClick={handleLogin}>
                    {
                        loadState? <p>Loading...</p> :  <h4>Log In</h4>
                    }
                   
                </div>
                <div className='ifelse'>
                    <p>Don't have an account?<b onClick={()=>navigate('/signin')} style={{color:'blue', fontSize: 13, cursor: 'pointer'}}>Signup</b></p>
                </div>
            </div>
        </div>
        <div className='deets2'></div>
    </div>
  )
}

export default Login