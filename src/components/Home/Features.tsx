import React from 'react';
import { motion } from 'framer-motion';

const Features = () => {
  const featureVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="features" className="py-12 sm:py-24 lg:py-32 flex items-center bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h2
            variants={featureVariants}
            className="md:text-8xl text-5xl font-bold text-gray-800 mb-4"
          >
            Features
          </motion.h2>
          <motion.p
            variants={featureVariants}
            className="text-gray-600 mb-8 max-w-4xl mx-auto"
          >
            Discover the amazing features of our product
          </motion.p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Feature 1 */}
          <motion.div
            variants={featureVariants}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-center justify-center bg-purple-100 rounded-full w-16 h-16 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Blazing Fast</h3>
              <p className="text-gray-600 mb-4">
                Our websites are built with performance in mind, ensuring lightning-fast load times.
              </p>
              <a href="#" className="text-purple-500 hover:underline">
                Learn more
              </a>
            </div>
          </motion.div>
          {/* Feature 2 */}
          <motion.div
            variants={featureVariants}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-center justify-center bg-green-100 rounded-full w-16 h-16 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Pixel Perfect</h3>
              <p className="text-gray-600 mb-4">
                We obsess over every pixel to ensure your website looks flawless on any screen.
              </p>
              <a href="#" className="text-green-500 hover:underline">
                Learn more
              </a>
            </div>
          </motion.div>
          {/* Feature 3 */}
          <motion.div
            variants={featureVariants}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-center justify-center bg-yellow-100 rounded-full w-16 h-16 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-yellow-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Responsive Design</h3>
              <p className="text-gray-600 mb-4">
                Our websites are optimized for every screen size, ensuring a seamless experience across all devices.
              </p>
              <a href="#" className="text-yellow-500 hover:underline">
                Learn more
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
