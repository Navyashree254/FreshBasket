import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Header from "./components/Header";
import Banner from "./components/Banner";


import Checkout from "./Pages/CheckoutForm";
import About from "./Pages/About";
import Shop from "./Pages/Products";
import Cart from "./Pages/cart";   
import ProductDetail from "./Pages/ProductDetails"; 


import { CartProvider } from "./Pages/Cartcontext";

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Banner />} />
            <Route path="/about" element={<About />} />   
            <Route path="/Products" element={<Shop />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/cart" element={<Cart />} />     
            <Route path="/product/:id" element={<ProductDetail />} /> 
          </Routes>
        </main>
      </Router>
    </CartProvider>
  );
}

export default App;


