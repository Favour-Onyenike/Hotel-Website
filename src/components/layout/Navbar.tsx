import React, { useState } from 'react';
import { Menu, X, Hotel, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Hotel className="h-8 w-8 text-emerald-600" />
              <span className="text-xl font-serif font-bold text-gray-900">La Posh</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-emerald-600 transition-colors">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-emerald-600 transition-colors">About Us</Link>
            <Link to="/rooms" className="text-gray-700 hover:text-emerald-600 transition-colors">Rooms</Link>
            <Link to="/suites" className="text-gray-700 hover:text-emerald-600 transition-colors">Suites</Link>
            <Link to="/contact" className="text-gray-700 hover:text-emerald-600 transition-colors">Contact</Link>
            <Link to="/book" className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors">
              Book Now
            </Link>
            <Link to="/admin" className="flex items-center space-x-1 text-gray-700 hover:text-emerald-600 transition-colors">
              <LogIn className="h-5 w-5" />
              <span>Login</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-emerald-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Home</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">About Us</Link>
            <Link to="/rooms" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Rooms</Link>
            <Link to="/suites" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Suites</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Contact</Link>
            <Link to="/book" className="block px-3 py-2 bg-emerald-600 text-white rounded-md">Book Now</Link>
            <Link to="/admin" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Login</Link>
          </div>
        </div>
      )}
    </nav>
  );
}