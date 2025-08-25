import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./Cartcontext";

export default function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const totalPrice = (cartItems || []).reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto mt-24 px-4">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {(!cartItems || cartItems.length === 0) ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="flex justify-between items-center border p-4 rounded-lg shadow-sm"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div>
                  <h2 className="text-lg font-medium">{item.name}</h2>
                  <p className="text-gray-600">
                    ${item.price} × {item.quantity}
                  </p>
                </div>
              </div>

              <button
                onClick={() => removeFromCart(item._id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="flex justify-between items-center mt-6 font-semibold text-xl">
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          <div className="mt-6 flex space-x-4">
            <Link to="/checkout">
              <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">
                Proceed to Checkout
              </button>
            </Link>
            <Link to="/Products">
              <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">
                Back to Products
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
