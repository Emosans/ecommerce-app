import axios from "axios";

function Checkout() {
  const handleCheckout = () => {
    axios
      .post("http://localhost:3000/api/checkout")
      .then(() => alert("Checkout successful!"))
      .catch((error) => console.error("Error during checkout:", error));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
        onClick={handleCheckout}
      >
        Confirm Checkout
      </button>
    </div>
  );
}

export default Checkout;
