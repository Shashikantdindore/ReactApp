import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6">
        <div className="mb-8 lg:mb-0">
            
          <h2 className="text-3xl font-bold">Raghav Enterprises</h2>
          <p className="mt-2 text-gray-400">A brief description of the company.</p>
        </div>
        <nav className="flex flex-wrap justify-center lg:justify-end space-x-6">
          <a href="#" className="text-gray-400 hover:text-gray-300 transition duration-300">Home</a>
          <a href="#" className="text-gray-400 hover:text-gray-300 transition duration-300">About</a>
          <a href="#" className="text-gray-400 hover:text-gray-300 transition duration-300">Services</a>
          <a href="#" className="text-gray-400 hover:text-gray-300 transition duration-300">Contact</a>
        </nav>
      </div>
      <div className="mt-8 bg-gray-800 py-4">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>&copy; 2024 Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
