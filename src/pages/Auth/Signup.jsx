import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import '../../styles/signup.css';

const Signup = () => {
    const [loadState, setLoadState] = useState(false);
    const [userInputs, setUserInput] = useState({
        fullName: '',
        email: '',
        password: ''
    });

    const Api = 'https://movie-app-ch5.onrender.com/api/user/sign-up';
    const navigate = useNavigate();

    const handleSignup = async () => {
        if (!userInputs.fullName || !userInputs.email || !userInputs.password) {
            toast.error('Please fill in all fields');
            return;
        }

        try {
            setLoadState(true);
            const res = await axios.post(Api, userInputs);
            if (res.status === 200) {
                localStorage.setItem('userData', JSON.stringify(res.data));
                toast.success('Signed up successfully');
                setTimeout(() => navigate('/login'), 2000); // Redirect after success
            }
        } catch (err) {
            toast.error(err.response?.data?.message || 'Signup failed');
        } finally {
            setLoadState(false);
        }
    };

    return (
        <div className='loginwrapper'>
            <ToastContainer />
            <div className='details1'></div>
            <div className='details2'>
                <div className='deets'>
                    <h2>Get Started</h2>
                    <p>Create your account</p>

                    <div className='fullname'>
                        <div className='nametext'>Fullname</div>
                        <input
                            type="text"
                            placeholder='Fullname'
                            className='input'
                            onChange={(e) => setUserInput((prev) => ({ ...prev, fullName: e.target.value }))}
                            value={userInputs.fullName}
                        />
                    </div>

                    <div className='email'>
                        <div className='nametext'>Email</div>
                        <input
                            type="email"
                            placeholder='Email'
                            className='input'
                            onChange={(e) => setUserInput((prev) => ({ ...prev, email: e.target.value }))}
                            value={userInputs.email}
                        />
                    </div>

                    <div className='password'>
                        <div className='nametext'>Password</div>
                        <input
                            type="password"
                            placeholder='Password'
                            className='input'
                            onChange={(e) => setUserInput((prev) => ({ ...prev, password: e.target.value }))}
                            value={userInputs.password}
                        />
                    </div>

                    <div className='signup'>
                        {loadState ? <p>Loading...</p> : <h4 onClick={handleSignup}>Sign-up</h4>}
                    </div>

                    <div className='ifelse'>
                        <p>
                            Have an Account?{' '}
                            <b onClick={() => navigate('/login')} style={{ color: 'blue', fontSize: 13, cursor: 'pointer' }}>
                                Login
                            </b>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
