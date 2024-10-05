import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <Router>
      <div className="max-w-4xl mx-auto p-4">
        <nav className="flex justify-between items-center mb-8">
          <Link to="/" className="text-2xl font-bold">
            E-Commerce
          </Link>
          <div>
            <Link to="/cart" className="mr-4">
              View Cart
            </Link>
            <Link to="/checkout">Checkout</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
