import React from "react";

interface CartItemProps {
  id: number;
  name: string;
  price : number;
  quantity: number;
  removeFromCart: (productId: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  id,
  name,
  price,
  quantity,
  removeFromCart,
}) => {
  return (
    <div className="border-b py-4 flex justify-between items-center">
      <div>
        <h4 className="font-semibold">{name}</h4>
        <p>Quantity: {quantity}</p>
        <p className="font-bold">${(price * quantity).toFixed(2)}</p>
      </div>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
        onClick={() => removeFromCart(id)}
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
