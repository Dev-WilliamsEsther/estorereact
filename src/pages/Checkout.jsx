import React from 'react'
import '../styles/checkout.css'
import { BiRadioCircleMarked } from "react-icons/bi";

const Checkout = () => {
  return (
    <div className='checkoutwrapper'>
        <div className='checkoutimg'>
            <div className='picture'>
            <h2>Checkout</h2>
            </div>
        </div>

        <div className='returncustomer'>
            <div className='return1'>
                <div className='clicktolog'>
                    <p>Returning Customer? <a href="">Click here to login</a></p>
                </div>
                <p>If you have shopped with us before, please enter your details in the boxes below. If you are a new customer, please proceed to the Billing & Shipping section.</p>
                <div className='userandpass'>
                    
                        <input type="text" placeholder='Username or Email'  className='loguser'/>
                    
                        <input type="password" placeholder='Password'  className='loguser'/>
                    
                </div>

                <div className='remember'>
                    <button className='rememberlogin'>LOG IN</button>
                    <div className='remind'>
                        <button></button>
                        <p>Remember me</p>
                    </div>
                </div>
                <p>Forgot your password?</p>
            </div>
            <div className='return2'>
                <div className='clicktocode'>
                    <p>Have a coupon? <a href="">Click here to enter your code</a> </p>                    
                </div>
                <input type="text" placeholder='Enter coupon code'  className='entercode'/>
                <button className='applycoupon'>Apply Coupon</button>
            </div>
        </div>

        <div className='billingdetails'>
            <div className='billingform'>
                <div className='form'>
                    <h2>Billing Details</h2>
                    <div className='firstndlast'>
                        <input type="text" placeholder='First name' className='username' />

                        <input type="text" placeholder='Last name' className='username' />
                    </div>
                    <input type="text" placeholder='Company name' className='nameofcompany' />

                    <div className='firstndlast'>
                        <input type="text" placeholder='Phone number' className='username' />

                        <input type="text" placeholder='Email Address' className='username' />
                    </div>
                    <input type="text" placeholder='Country' className='nameofcompany' />

                    <input type="text" placeholder='Address line 01' className='nameofcompany' />

                    <input type="text" placeholder='Address line 02' className='nameofcompany' />

                    <input type="text" placeholder='Town/City' className='nameofcompany' />

                    <input type="text" placeholder='District' className='nameofcompany' />

                    <input type="text" placeholder='Postcode/ZIP' className='nameofcompany' />


                    <div className='acctcreate'>
                        <button></button>
                        <p>Create an Account?</p>
                    </div>

                    <div className='shipping'>
                        <h3>Shipping Details</h3>

                        <div className='shipcreate'>
                            <button></button>
                            <p>Ship to a different address?</p>
                        </div>

                        <input type="text" placeholder='Order Notes' className='order' />

                    </div>
                </div>
            </div>
            <div className='billingorder'>
                <div className='orderlist'>
                    <div className='ordertext'>Your Order</div>
                    <div className='orders'></div>
                    <div className='orders'></div>
                    <div className='orders'></div>
                    <div className='orders'></div>
                    <div className='orders'></div>
                    <div className='orders'></div>

                    <div className='checkpayments'>
                    <BiRadioCircleMarked />   Check Payments
                    </div>

                    <div className='payments'>Please send a check to Store Name,<br /> Store Street, Store Town, Store State / <br /> County, Store Postcode.</div>

                    <div className='checkpayments'>
                    <BiRadioCircleMarked />   PAYPAL
                    </div>

                    <div className='payments'>Please send a check to Store Name,<br /> Store Street, Store Town, Store State / <br /> County, Store Postcode.</div>

                    <div className='terms'>
                            <button></button>
                            <p>i've read and accept the <b>terms and conditions*</b></p>
                        </div>

                        <button className='proceedtopaypal'>PROCEED TO PAYPAL</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Checkout