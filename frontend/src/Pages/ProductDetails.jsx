import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { CartContext } from "./Cartcontext";

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/api/products/${id}`);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading product...</p>;
  if (!product) return <p className="text-center mt-10 text-red-500">Product not found</p>;

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    navigate("/cart");
  };

  const handleBuyNow = () => {
    addToCart({ ...product, quantity });
    navigate("/checkout");
  };

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
     
        <img
          src={product.image || "/placeholder.jpg"}
          alt={product.name}
          className="w-full h-96 object-cover rounded-lg shadow-lg"
        />

        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-green-700 font-bold text-2xl mb-6">
            ${Number(product.price).toFixed(2)}
          </p>

        
          <div className="mb-6 space-y-1 text-gray-600">
            {product.category && <p><strong>Category:</strong> {product.category}</p>}
            {product.stock !== undefined && <p><strong>Stock:</strong> {product.stock}</p>}
            {product.origin && <p><strong>Origin:</strong> {product.origin}</p>}
            {product.nutrition && <p><strong>Nutrition:</strong> {product.nutrition}</p>}
          </div>

        
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="bg-gray-200 px-3 py-1 rounded-lg"
            >
              -
            </button>
            <span className="text-lg font-semibold">{quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="bg-gray-200 px-3 py-1 rounded-lg"
            >
              +
            </button>
          </div>

          <div className="flex gap-4">
            <button
              onClick={handleAddToCart}
              className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold px-6 py-3 rounded-lg"
            >
              Add to Cart
            </button>

            <button
              onClick={handleBuyNow}
              className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-lg"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
