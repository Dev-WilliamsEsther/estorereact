import React, { useState } from 'react'
import "../../styles/header.css"
import { LiaAngleDownSolid } from "react-icons/lia";
import { FaSearch } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartSharp } from "react-icons/io5";
import { NavLink, useNavigate } from 'react-router';

const Header = () => {
    const navigate = useNavigate()
    const [toggle, setToggle ] = useState(true)
    const setToggleVisible = () => {
        setToggle (prevState => !prevState);
    };

  return (
    <>
    <div className='first'>
        <div className='flag'>
        <img src="src/assets/flag.png" alt="" />
        NGN <LiaAngleDownSolid />
        <i>+2349054321743</i>
        </div>
        <div className='caty'>
            <a  onClick={()=> navigate('/login')}>My Account</a> 
            <a >Wish List</a>
            <a  onClick={()=> navigate('/cart')}>Shopping</a> 
            <a  onClick={()=> navigate('/cart')}>Cart</a> 
            <a onClick={()=> navigate('/checkout')}>Checkout</a>
        </div>
    </div>


    <div className='header'>
        <div className='logo'>
            <img src="src/assets/Create_a_professional_logo_now-removebg-preview copy.png" alt="" />
        </div>
        <div className='categories'>
            
                <a onClick={()=>navigate("")}>Home</a> 
                <a onClick={()=>navigate("/category")}>Category</a>
                <a onClick={setToggleVisible}> Latest</a>
                {toggle && (
                    <div className='LatestName'>
                        <ul>
                            <li>Product list</li>
                            <li onClick={()=>navigate('/productdetails')}>Product Details</li>
                            
                        </ul>
                    </div>
                )}
                <a>Blog</a>
                <a>Pages</a>
                <a>Contacts</a>
        </div>
        <div className='search'> 
            <div className='load'>
                <input type="text" placeholder='Search products' /> <FaSearch />
            </div>
             <IoMdHeartEmpty  className='fav'/>
            <NavLink to={"/cart"}> <IoCartSharp  className='shop'/></NavLink>
            <button className='sign' onClick={()=> navigate('/signin')}>Sign In</button>
        </div>
    </div>
    </>
  )
}

export default Header