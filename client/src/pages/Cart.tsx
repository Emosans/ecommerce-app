import { useState, useEffect } from "react";
import axios from "axios";
import CartItem from "../components/CartItem";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/cart")
      .then((response) => setCartItems(response.data))
      .catch((error) => console.error("Error fetching cart:", error));
  }, []);

  const removeFromCart = (productId: number) => {
    axios
      .delete(`http://localhost:3000/api/cart/${productId}`)
      .then(() =>
        setCartItems((prevItems) =>
          prevItems.filter((item) => item.id !== productId)
        )
      )
      .catch((error) => console.error("Error removing item from cart:", error));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <CartItem key={item.id} {...item} removeFromCart={removeFromCart} />
        ))
      )}
    </div>
  );
}

export default Cart;
