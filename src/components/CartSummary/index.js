import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const totalItems = cartList.reduce((sum, item) => sum + item.quantity, 0)
      const totalPrice = cartList.reduce(
        (sum, item) => sum + item.quantity * item.price,
        0,
      )

      return (
        <div className="cart-summary-container">
          <h1 className="order-total">Order Total: Rs {totalPrice}/-</h1>
          <p className="items-count">{totalItems} Items in cart</p>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
