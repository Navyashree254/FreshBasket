import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1671379086168-a5d018d583cf?w=1200&auto=format&fit=crop&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <motion.div
          className="relative z-10 max-w-4xl text-center text-white px-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            About Us
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl mb-6 leading-relaxed"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Fresh Basket is an online grocery store based in Karachi, Pakistan,
            specializing in delivering fresh produce, groceries, and bakery
            items directly to customers' doorsteps. Their mission is to provide
            a convenient and reliable shopping experience, ensuring customers
            have access to quality products without leaving their homes.
          </motion.p>

          <motion.p
            className="text-lg md:text-xl mb-6 leading-relaxed"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Fresh Basket is dedicated to promoting healthy eating habits by
            providing easy access to the best and freshest produce. They support
            local farms and promote domestic agriculture, playing a role in
            enhancing the agri-supply chain and post-harvest management
            conditions.
          </motion.p>
        </motion.div>
      </div>

      {/* Our Mission Section */}
      <div className="max-w-6xl mx-auto py-20 px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-green-700"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Mission
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://t4.ftcdn.net/jpg/00/49/62/29/360_F_49622940_qwjSyD2gYNqfqgyGg6TNkfaoMrBEBg6s.jpg"
              alt="Fresh Produce"
              className="w-full h-56 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-3">Fresh & Healthy</h3>
              <p className="text-gray-600">
                Providing the freshest fruits, vegetables, and groceries to
                promote healthy lifestyles for families and communities.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src="https://thumbs.dreamstime.com/b/online-delivery-fruits-vegetables-cart-gray-laptop-vector-illustration-217374748.jpg"
              alt="Convenience"
              className="w-full h-56 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-3">Convenience</h3>
              <p className="text-gray-600">
                Making shopping simple by delivering groceries directly to your
                doorstep — saving you time and energy.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <img
              src="https://img.freepik.com/free-photo/aged-farmer-posing-greenhouse-with-basket-strawberries_7502-8052.jpg?semt=ais_hybrid&w=740&q=80"
              alt="Supporting Farmers"
              className="w-full h-56 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-3">Supporting Farmers</h3>
              <p className="text-gray-600">
                Empowering local farmers by sourcing produce locally and
                strengthening the agricultural supply chain.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
