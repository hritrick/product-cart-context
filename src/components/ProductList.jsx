import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

// Hardcoded product list with name and price
const PRODUCTS = [
  { id: 1, name: 'Mechanical Keyboard', price: 79.99 },
  { id: 2, name: 'Wireless Mouse', price: 29.99 },
  { id: 3, name: 'USB-C Monitor Stand', price: 45.0 },
  { id: 4, name: 'Noise-Canceling Headset', price: 99.5 },
];

export default function ProductList() {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="section-card">
      <h3>Available Products</h3>
      <div className="product-grid">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="product-item">
            <div>
              <p className="product-title">{product.name}</p>
              <p className="product-price">${product.price.toFixed(2)}</p>
            </div>
            <button
              type="button"
              className="btn-add"
              onClick={() => addToCart(product)}
            >
              + Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
