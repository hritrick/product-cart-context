# Product Cart (React + Context API)

A minimal e-commerce shopping cart built with React and Context API to demonstrate global state sharing for catalog items, cart item quantities, and total calculations.

## What this Project Does
- Displays a hardcoded catalog of tech products with `name` and `price`.
- Uses `CartContext` to provide global cart management:
  - `addToCart(product)`: adds an item to cart or increments quantity if already present
  - `removeFromCart(productId)`: decrements quantity or removes the item when quantity reaches zero
  - `totalAmount`: calculates running dollar total based on item quantities and prices
- Renders the cart item list and updates the total amount dynamically without prop drilling.

---

## Step-by-Step Commands (From Scratch)

### 1. Create project from an empty folder
```bash
npm create vite@latest product-cart-context -- --template react
cd product-cart-context
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```

The app will run on: **`http://localhost:5173`**.

---

## Required Ports & Services
- **Port:** `5173` (Vite dev server)
- **Database:** None (in-memory React Context state)

---

## File-by-File Implementation Notes

| File | Purpose & Requirements Covered |
| :--- | :--- |
| `src/context/CartContext.jsx` | - Context creation: `export const CartContext = createContext()`<br>- Provider state: `cart`<br>- `addToCart(product)`: increments quantity or adds new item<br>- `removeFromCart(productId)`: decrements quantity or removes item<br>- `totalAmount`: computes `cart.reduce((sum, item) => sum + item.price * item.quantity, 0)` |
| `src/components/ProductList.jsx` | - Hardcoded array of products (`name` and `price`)<br>- Consumes `{ addToCart } = useContext(CartContext)` to add selected products |
| `src/components/Cart.jsx` | Consumes `{ cart, removeFromCart, totalAmount } = useContext(CartContext)` to render the cart items, quantities, sub-totals, and total amount |
| `src/App.jsx` | Wraps application layout with `<CartProvider>` |
| `src/index.css` | Minimal, clean CSS styling for products, cart rows, badges, and the total bar |
| `src/main.jsx` | Mounts the `<App />` root |
| `vite.config.js` | Configures the standard Vite React plugin |
| `package.json` | Dependencies and scripts |
