import {useState} from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import './index.css'

const PaymentPopup = ({trigger, totalItems, totalPrice}) => {
  const [paymentMethod, setPaymentMethod] = useState('')
  const [orderPlaced, setOrderPlaced] = useState(false)

  const onConfirmOrder = () => {
    setOrderPlaced(true)
  }

  const renderSuccessMessage = () => (
    <div className="success-container">
      <h2 className="success-text">Your order has been placed successfully</h2>
    </div>
  )

  const renderPaymentContent = () => (
    <div className="popup-container">
      <h1 className="popup-title">Select Payment Method</h1>

      <div className="payment-options">
        <label className="option disabled">
          <input type="radio" disabled /> Card
        </label>

        <label className="option disabled">
          <input type="radio" disabled /> Net Banking
        </label>

        <label className="option disabled">
          <input type="radio" disabled /> UPI
        </label>

        <label className="option disabled">
          <input type="radio" disabled /> Wallet
        </label>

        <label className="option">
          <input
            type="radio"
            value="COD"
            checked={paymentMethod === 'COD'}
            onChange={e => setPaymentMethod(e.target.value)}
          />
          Cash on Delivery
        </label>
      </div>

      <div className="summary-container">
        <p className="summary-text">
          Items: <strong>{totalItems}</strong>
        </p>
        <p className="summary-text">
          Total Price: <strong>₹{totalPrice}</strong>
        </p>
      </div>

      <button
        type="button"
        className={`confirm-btn ${
          paymentMethod !== 'COD' ? 'disabled-btn' : ''
        }`}
        disabled={paymentMethod !== 'COD'}
        onClick={onConfirmOrder}
      >
        Confirm Order
      </button>
    </div>
  )

  return (
    <Popup modal trigger={trigger} className="popup-modal">
      {orderPlaced ? renderSuccessMessage() : renderPaymentContent()}
    </Popup>
  )
}

export default PaymentPopup
