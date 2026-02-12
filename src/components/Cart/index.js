import {Link} from 'react-router-dom'

import Header from '../Header'
import CartContext from '../../context/CartContext'
import CartItem from '../CartItem'
import CartSummary from '../CartSummary'
import PaymentPopup from '../PaymentPopup'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value
      const isEmpty = cartList.length === 0

      // FIX: Move total price calculation here
      const totalPrice = cartList.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0,
      )

      return (
        <>
          <Header />
          <div className="cart-container">
            {isEmpty ? (
              <div className="empty-cart-view">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png"
                  alt="cart empty"
                  className="empty-cart-image"
                />
                <h1>Your Cart Is Empty</h1>
                <Link to="/products">
                  <button type="button" className="shop-now-button">
                    Shop Now
                  </button>
                </Link>
              </div>
            ) : (
              <div className="cart-content-container">
                <div className="cart-header-container">
                  <h1 className="cart-heading">My Cart</h1>
                  <button
                    type="button"
                    className="remove-all-btn"
                    onClick={removeAllCartItems}
                  >
                    Remove All
                  </button>
                </div>

                <ul className="cart-items-list">
                  {cartList.map(item => (
                    <CartItem key={item.id} cartItemDetails={item} />
                  ))}
                </ul>

                {/* Existing Cart Summary */}
                <CartSummary />

                {/* Payment Popup - FIXED version */}
                <div className="checkout-popup-container">
                  <PaymentPopup
                    trigger={
                      <button type="button" className="checkout-button">
                        Checkout
                      </button>
                    }
                    totalItems={cartList.length}
                    totalPrice={totalPrice}
                  />
                </div>
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default Cart
