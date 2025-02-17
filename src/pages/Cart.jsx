import React from "react"
import '../styles/cart.css'

const Cart = () => {
  return (
    <div className="cartwrapper">
        <div className="cartimg"><h2>Cart List</h2></div>
        <div className="cartdeets">
            <div className="border">
                <div className="insideborder">Product</div>
                <div className="insideborder1">
                    <a>Price</a>
                    <a>Quantity</a>
                    <a>Total</a>
                </div>
            </div>
            <div className="cartitems">
                <div className="product"></div>
                <div className="productname">
                    <h3>Go Crazy Denim</h3>
                </div>
                <div className="producttotal">
                    <div className="dollars">$250</div>
                    <div className="dollarsadd">
                        <div className="addition">+</div>2
                    </div>
                    <div className="dollars">$500</div>
                </div>
            </div>
            <div className="cartitems">
                <div className="product"></div>
                <div className="productname">
                <h3>Go Crazy Denim</h3>
                </div>
                <div className="producttotal">
                <div className="dollars">$250</div>
                    <div className="dollarsadd">
                        <div className="addition">+</div>2
                    </div>
                    <div className="dollars">$500</div>
                </div>
            </div>
            <div className="cartitems">
                <div className="update">
                    <h2>Update Cart</h2>
                </div>
                <div className="close">
                    <h2>Close Coupon</h2>
                </div>
            </div>
            <div className="cartitems1">
                <div className="subtotal">
                    <a>Subtotal</a>
                    <a>$1500</a>
                </div>
            </div>
            {/* <div className="cartitems"></div> */}
        </div>
    </div>
  )
}

export default Cart