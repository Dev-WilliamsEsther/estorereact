import React from 'react'
import '../../styles/signup.css'

const Signup = () => {
  return (
    <div className='loginwrapper'> 
        <div className='details1'></div>
        <div className='details2'>
            <div className='deets'>
                <h2>Get Started</h2>
                <p>Create your account</p>
                <div className='fullname'>
                    <div className='nametext'>Fullname</div>
                    <input type="text" placeholder='Fullname' className='input'/>
                </div>
                <div className='email'>
                    <div className='nametext'>Email</div>
                    <input type="email" placeholder='Email' className='input' />
                </div>
                <div className='password'>
                    <div className='nametext'>Password</div>
                    <input type="password" placeholder='Password' className='input' />
                </div>
                <div className='signup'>
                    <h4>Sign-up</h4>
                </div>

                <div className='ifelse'>
                    <p>Have an Account?<b>Login</b></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup