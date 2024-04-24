import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
      className="bg-gray-800 text-white py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <p className="text-gray-400 mb-4">
              We are a team of passionate designers and developers dedicated to creating pixel-perfect websites.
            </p>
            <p className="text-gray-400">&copy; {new Date().getFullYear()} Pixel Perfect. All rights reserved.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-gray-400">
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  Features
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  Contribute
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="text-gray-400">
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  Blog
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  Documentation
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  Community
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates and special offers.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-700 text-white rounded-l-md p-2 flex-grow"
              />
              <button className="bg-purple-600 hover:bg-purple-700 text-white rounded-r-md px-4 py-2">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;