import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { CartContext } from "./Cartcontext";
import { useNavigate } from "react-router-dom";

export default function Shop() {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/products");
        setProducts(data);
      } catch (err) {
        setError("Failed to load products. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading products...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-green-700">
        Fresh Fruits
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 cursor-pointer"
            onClick={() => navigate(`/product/${product._id}`)}
          >
            <img
              src={product.image || "/placeholder.jpg"}
              alt={product.name}
              className="h-52 w-full object-cover rounded-t-xl"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-2">{product.description}</p>
              <p className="text-green-700 font-bold text-lg mb-4">
                ${Number(product.price).toFixed(2)}
              </p>
              <button
                onClick={(e) => {
                  e.stopPropagation(); 
                  addToCart(product);
                  navigate("/cart");
                }}
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 rounded-lg"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
