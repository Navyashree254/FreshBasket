
  import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <div className="mt-20">
   
      <motion.section
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full bg-cover bg-center text-white py-24 px-6 rounded-3xl shadow-2xl overflow-hidden"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/874157918/photo/set-of-fresh-fruits-healthy-food-on-wooden-background-top-view-free-space.jpg?s=612x612&w=0&k=20&c=tWV_vP-hiQYIAUechX5pPxG7FhNBHcgoy1mBv81LId0=')",
        }}
      >
        <div className="absolute inset-0 bg-black/40 rounded-3xl"></div>

        <div className="relative max-w-5xl mx-auto text-center z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
            Fresh & Organic Fruits
          </h1>
          <p className="text-lg md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Enjoy the natural sweetness of handpicked fruits, delivered fresh to
            your home every day.
          </p>

          <Link to="/Products">
            <button className="bg-white text-green-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full shadow-lg transition text-lg">
              Shop Now
            </button>
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
