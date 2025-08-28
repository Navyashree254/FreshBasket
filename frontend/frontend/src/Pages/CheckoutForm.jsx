import React, { useContext, useState } from "react";
import { CartContext } from "./Cartcontext";

export default function Checkout() {
  const { cartItems } = useContext(CartContext);
  const [form, setForm] = useState({ name: "", address: "", email: "", phone: "" });
  const [success, setSuccess] = useState(false);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderData = {
      ...form,
      items: cartItems,
      total: totalPrice,
    };

    try {
      const res = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      if (res.ok) {
        setSuccess(true);
      } else {
        alert("❌ Error placing order. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting order:", error);
      alert("❌ Server error. Please check backend connection.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-20 p-6 border rounded-lg shadow-lg bg-white">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      {success ? (
        <div className="text-center text-green-700 font-semibold text-lg">
          ✅ Order placed successfully! <br />
          Thank you, {form.name}. Your total was ${totalPrice.toFixed(2)}.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
          <textarea
            name="address"
            placeholder="Shipping Address"
            value={form.address}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          ></textarea>

          <div className="flex justify-between font-semibold text-lg">
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Place Order
          </button>
        </form>
      )}
    </div>
  );
}
