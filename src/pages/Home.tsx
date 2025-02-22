import React from 'react';
import { Link } from 'react-router-dom';
import { Utensils, Wifi, Clock, Wine } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section 
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full flex items-center justify-center text-center text-white px-4">
          <div>
            <h1 className="text-4xl md:text-6xl font-serif mb-4">Welcome to La Posh</h1>
            <p className="text-xl md:text-2xl mb-8">Experience Luxury Like Never Before</p>
            <Link 
              to="/book" 
              className="bg-emerald-600 text-white px-8 py-3 rounded-md text-lg hover:bg-emerald-700 transition-colors"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img 
            src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="Hotel Exterior"
            className="rounded-lg shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-serif mb-4">Experience True Luxury</h2>
            <p className="text-gray-600 mb-6">
              La Posh Hotel and Suites offers an unparalleled luxury experience in the heart of the city. 
              With our world-class amenities and exceptional service, we ensure your stay is nothing short of perfect.
            </p>
            <Link 
              to="/about"
              className="text-emerald-600 hover:text-emerald-700 font-semibold"
            >
              Learn More →
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Utensils className="h-12 w-12 mx-auto text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Room Service</h3>
              <p className="text-gray-600">Enjoy delicious meals any time of day</p>
            </div>
            <div className="text-center">
              <Wine className="h-12 w-12 mx-auto text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Restaurant & Bar</h3>
              <p className="text-gray-600">Fine dining and premium drinks</p>
            </div>
            <div className="text-center">
              <Wifi className="h-12 w-12 mx-auto text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Free Wi-Fi</h3>
              <p className="text-gray-600">Stay connected throughout your stay</p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 mx-auto text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Power Supply</h3>
              <p className="text-gray-600">Uninterrupted comfort guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif text-center mb-12">Guest Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                review: "An absolutely amazing experience! The staff went above and beyond to make our stay memorable.",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
              },
              {
                name: "Michael Chen",
                review: "The rooms are stunning and the service is impeccable. Will definitely be returning!",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
              },
              {
                name: "Emma Thompson",
                review: "Luxury at its finest. The attention to detail in every aspect of the hotel is remarkable.",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
              }
            ].map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <img 
                    src={review.image} 
                    alt={review.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{review.name}</h3>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">{review.review}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}