import React from 'react'
import '../Components/header/Header'
import "../styles/homePage.css"
import { BsBox2Fill } from "react-icons/bs";
import { FaUnlockKeyhole } from "react-icons/fa6";
import { MdSecurity } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { RiTwitterFill } from "react-icons/ri";
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import ProductDatas from '../productdata/Product.json'
import 'animate.css';


const HomePage = () => {
  return (
    <>
    <div className='wrapper'>
        <div className='discount'>
            <img src="src/assets/Free_Photo___Happy_woman_holding_presents_medium_shot-removebg-preview.png" alt="" />

            <div className='distext'>
            <h3>45% Discount</h3>
            <h1>Summer Collection</h1>
            <p>Best Collections By 2024!</p>
            <button className='discountshop animate__animated animate__jello' >Shop Now!</button>
            </div>
            
        </div>

        <div className='shopcategory'>
            <div className='catetext'>
                <h1>Shop By Category</h1>
            </div>
            <div className='catepics'>
                <div className='cateimgs'>
                    <img src="src/assets/Women_s___Men_s_Clothing__Shop_Online_Fashion-removebg-preview copy.png" alt="" />
                    <div className='inner'>
                        <h3>Teen's </h3>
                        <button className='best'>Best New Deals</button>
                    </div>
                </div>
                <div className='cateimgs'>
                    <img src="src/assets/Mens_Old_Money_Summer_Outfit_Idea_Fashion-removebg-preview copy.png" alt="" />
                    <div className='inner'>
                        <p>Discount!</p>
                        <h3>Men's Wear</h3>
                        <h4>New Collection</h4>
                    </div>
                </div>
                <div className='cateimgs'>
                    <img src="src/assets/___3_-removebg-preview copy.png" alt="" />
                    <div className='inner'>
                        <h3>HIS & HERS</h3>
                        <button className='best'>Best New Deals</button>
                    </div>
                </div>
            </div>

            <div className='latest'>
                <h1>Latest Products</h1>
                <div className='latesttext'>
                    <a>All</a>
                    <a>New</a>
                    <a>Featured</a>
                    <a>Offer</a>
                </div>
            </div>

        </div>
        

        <div className='jsonimg'>

            {
                ProductDatas.map((product)=>(
                    <div className='imgcontainer' key={product.id}>
                        <img src={product.image} />
                        <p className='textcontainer'>{product.name}</p>
                    </div>
                ))
            }
            

        </div>


        <div className='wrapreturn'>
            <div className='returntohome'>
                <img src="src/assets/Lewis_Hamilton-removebg-preview copy.png" alt="" />
                <img src="src/assets/womendenim copy.png" alt="" />
            <div className='innertext'>
                <h1>Find The Best Products From Our Store</h1>
                <p>....Denim Never Fades,Just Like Style</p>
                <button className='buy'>Shop Now</button>
                <div className='img'>
                   <img src="src/assets/men_s_clothing_styles-removebg-preview copy.png" alt="" />
                </div>
            </div>
            </div> 
        </div>
        <div className='knitted'>
            <div className='innerknit'>
                <h1>The Best Collection Of This Month</h1>
                <p>Knitted with Love,Worn with Joy.</p>
                <button className='buy'>Check This Out</button>
                <div className='folded'>
                <img src="src/assets/foldedknit copy.png" alt="" />
                </div>
            </div>
            <div className='innerknit'>
                <img src="src/assets/JLUXLABEL-removebg-preview copy.png" alt="" />
            </div>
            <div className='innerknit1'>
                <div className='knititems'>
                    <button className='pim'>KNITTED TOPS</button>
                    <img src="src/assets/knit2 copy.png" alt="" />
                </div>
                <div className='knititems'>
                <button className='pim1'>KNITTED DINNER GOWNS</button>
                <img src="src/assets/knit3 copy.png" alt="" />
                </div>
                <div className='knititems'>
                <button className='pim'>KNITTED SWEATERS</button>
                <img src="src/assets/knit1 copy.png" alt="" />
                </div>
            </div>
        </div>

        <div className='latestnews'>
            <div className='news'>
                <h1>Get Our Latest News Offer</h1>
                <p>Subscribe to news letter here</p>
            </div>
            <div className='info'>
                <div className='writeup'> <BsBox2Fill className='iconsize' />
                <h2>Free Shipping Method</h2>
                <p>Why pay extra when you can get your order delivered <b>for FREE</b></p>
                <a> ✅Save More</a>
                 <a>✅Hassle-Free Checkout</a>
                </div>
                <div className='writeup'> <FaUnlockKeyhole className='iconsize' />
                <h2>Secure Payment</h2>
                <p>Shop with peace of mind knowing that your transactions are protected and secure at every step. Whether youre making a small purchase or a big one, weve got you covered!</p>
                </div>
                <div className='writeup'> <MdSecurity className='iconsize' />
                <h2>Secure User Info</h2>
                <p>Enjoy a worry-free experience,knowing your privacy is our top priority!</p>
                <a>✅End-to-End Encryption</a>
                <a>✅Secure Login & Authentication</a>
                </div>
            </div>
        </div>

        <div className='images'>
            <div className='img'>
                <img src="src/assets/Michael B Jordan Invents _Criceps_ In This Shirt He Got On _ inside jamari fox copy.jpeg" alt="" />
            </div>
            <div className='img'>
                <img src="src/assets/casual copy.jpeg" alt="" />
            </div>
            <div className='img'>
                <img src="src/assets/_ (15) copy.jpeg" alt="" />
            </div>
            <div className='img'>
                <img src="src/assets/denimshot copy.jpeg" alt="" />
            </div>
            <div className='img'>
                <img src="src/assets/_ (9) copy.jpeg" alt="" />
            </div>
        </div>

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


    </div>
    </>
  )
}

export default HomePage