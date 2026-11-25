import { CartProvider } from './context/CartContext';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  return (
    <CartProvider>
      <div className="container">
        <h2>Tech Gadgets Store</h2>
        <p className="subtitle">Context API Shopping Cart</p>
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;
