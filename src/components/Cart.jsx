import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function Cart() {
  const { cart, removeFromCart, totalAmount } = useContext(CartContext);

  return (
    <div className="section-card cart-box">
      <h3>Shopping Cart ({cart.reduce((qty, item) => qty + item.quantity, 0)} items)</h3>

      {cart.length === 0 ? (
        <p className="empty-cart-msg">Your cart is empty. Add items above!</p>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <div className="cart-item-details">
                  <span className="cart-item-name">{item.name}</span>
                  <span className="cart-item-sub">
                    ${item.price.toFixed(2)} × {item.quantity} = $
                    {(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
                <button
                  type="button"
                  className="btn-remove"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="total-bar">
            <span>Total Amount:</span>
            <strong>${totalAmount.toFixed(2)}</strong>
          </div>
        </>
      )}
    </div>
  );
}
