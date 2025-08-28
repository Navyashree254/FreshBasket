import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  

  const userId = "guest@example.com";

  
  useEffect(() => {
    fetch(`http://localhost:5000/api/cart/${userId}`)
      .then((res) => res.json())
      .then((data) => setCartItems(data.items || []))
      .catch((err) => console.error("Error fetching cart:", err));
  }, []);

 
  useEffect(() => {
    fetch("http://localhost:5000/api/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, items: cartItems }),
    }).catch((err) => console.error("Error saving cart:", err));
  }, [cartItems]);

 
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item._id === product._id);
      if (existingItem) {
        return prevItems.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + (product.quantity || 1) }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: product.quantity || 1 }];
      }
    });
  };

 
  const removeFromCart = (_id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item._id !== _id));
  };

 
  const clearCart = () => {
    setCartItems([]);
    fetch(`http://localhost:5000/api/cart/${userId}`, { method: "DELETE" })
      .catch((err) => console.error("Error clearing cart:", err));
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
