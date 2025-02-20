import React from 'react'
import "../../styles/footer.css"
import { CiHeart } from "react-icons/ci";
import { RiTwitterFill } from "react-icons/ri";
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

const Footer = () => {
  return (
    <>
        <div className='footer'>
            <div className='textinfooter'>
                <h3>We believe fashion should be an expression of confidence,individuality,and comfort.Our collection features trendy,high-quality clothing designed to fit every lifestyle,from casual everyday wear to statement pieces that turn heads.</h3>
            </div>
            <div className='textinfooter'>
                <h2>Quick Links</h2>
                <p>About</p>
                <p>Offer & Discounts</p>
                <p>Get Coupon</p>
                <p>Contact Us</p>
            </div>
            <div className='textinfooter'>
                <h2>New Products</h2>
                <p>Woman Cloth</p>
                <p>Fashion Accessories</p>
                <p>Man Accessories</p>
                <p>Vintage Scarfs</p>
            </div>
            <div className='textinfooter'>
                <h2>Support</h2>
                <p>Frequently Asked Questions</p>
                <p>Terms and Conditions</p>
                <p>Privacy Policy</p>
                <p>Report a Payment Issue</p>
            </div>
        </div>

        <div className='media'>
            <div className='copyright'>
                <p>Copyright ©2025 All rights reserved| This template is made with <CiHeart />   by <i>Dev-Williams</i></p>
            </div>
            <div className='icons'>
            <RiTwitterFill />
            <RiFacebookFill />
            <FaInstagram />
            <TbWorld />
            </div>
        </div>
        </>
  )
}

export default Footer