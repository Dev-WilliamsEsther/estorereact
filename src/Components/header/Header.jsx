import React from 'react'
import "../../styles/header.css"
import { LiaAngleDownSolid } from "react-icons/lia";
import { FaSearch } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartSharp } from "react-icons/io5";
import { NavLink, useNavigate } from 'react-router';

const Header = () => {
    const navigate = useNavigate()
  return (
    <>
    <div className='first'>
        <div className='flag'>
        <img src="src/assets/flag.png" alt="" />
        NGN <LiaAngleDownSolid />
        <i>+2349054321743</i>
        </div>
        <div className='caty'>
            <a >My Account</a>
            <a >Wish List</a>
            <a >Shopping</a>
            <a >Cart</a>
            <a >Checkout</a>
        </div>
    </div>


    <div className='header'>
        <div className='logo'>
            <img src="src/assets/Create_a_professional_logo_now-removebg-preview copy.png" alt="" />
        </div>
        <div className='categories'>
            
        <NavLink to={""}> <a>Home</a> </NavLink>
                <a>Category</a>
                <a>Latest</a>
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