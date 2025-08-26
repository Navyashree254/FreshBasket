import { Apple, ShoppingCart, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../Pages/Cartcontext";  

export default function Header() {
  const { cartItems } = useContext(CartContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 md:px-12">
        
        
        <div className="flex items-center space-x-2">
          <Apple className="text-red-600" size={32} />
          <span className="text-2xl font-bold text-green-700">Fresh_Basket</span>
        </div>                     

     
        <nav className="hidden md:flex">
          <ul className="flex space-x-10 font-medium text-white-700">
            <li><Link to="/" className="hover:text-green-600 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-green-600 transition">About</Link></li>
            <li><Link to="/Products" className="hover:text-green-600 transition">Products</Link></li>
            <li><Link to="/checkout" className="hover:text-green-600 transition">Checkout</Link></li>
          </ul>
        </nav>

     
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/cart" className="relative">
            <button className="p-1 rounded-full hover:bg-gray-100 transition relative">
              <ShoppingCart size={22} className="text-gray-700" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full px-1.5 py-0.5">
                  {cartCount}
                </span>
              )}
            </button>
          </Link>
          <Link to="/checkout">
            <button className="bg-green-600 text-wite hover:bg-green-700 rounded-full px-6 py-2 shadow">
              Order Now
            </button>
          </Link>
        </div>

        
        <button 
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col space-y-4 py-4 px-6 text-gray-700 font-medium">
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><Link to="/Products" onClick={() => setIsMenuOpen(false)}>Products</Link></li>
            <li><Link to="/checkout" onClick={() => setIsMenuOpen(false)}>Checkout</Link></li>
            <li>
              <Link to="/cart" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
                <ShoppingCart size={22} className="mr-2 text-gray-700" />
                Cart ({cartCount})
              </Link>
            </li>
            <li>
              <Link to="/checkout" onClick={() => setIsMenuOpen(false)}>
                <button className="w-full bg-green-600 text-white hover:bg-green-700 rounded-full px-6 py-2 shadow">
                  Order Now
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
