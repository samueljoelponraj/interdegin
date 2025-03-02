import React from "react";
import { useNavigate } from "react-router-dom";
import myImage from "../assets/land.png";

const Home = () => {
  const navigate = useNavigate(); // Hook to handle navigation

  const handleGetStarted = () => {
    navigate("/login"); // Redirect to the Login page
  };

  return (
    <div className="bg-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative bg-blue-900">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-6 py-16">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Welcome to <span className="text-blue-300">Inter Design</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Explore modern and innovative interior designs that transform your
              space into something extraordinary. We create designs tailored to
              your unique style and personality.
            </p>
            <a
              href="#features"
              className="px-6 py-3 text-lg bg-blue-600 hover:bg-blue-500 text-white rounded-lg shadow-md hover:shadow-lg transition"
            >
              Learn More
            </a>
          </div>
          {/* Right Image */}
          <div className="lg:w-1/2">
          <img
              src={myImage} // Use your imported image here
              alt="Interior Design"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-100 text-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
            Why Choose Us
          </h2>
          <div className="flex flex-wrap -mx-4">
            {/* Feature 1 */}
            <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
              <div className="p-6 bg-white rounded-lg shadow-lg text-center">
                <div className="mb-4">
                  <svg
                    className="w-12 h-12 text-blue-600 mx-auto"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927C9.438 2.378 10 2 10 2s.562.378.951.927c.435.606 1.33 1.673 1.912 2.401a12.295 12.295 0 012.623-1.492c.898-.333 1.514-.298 1.514-.298s.05.616-.298 1.514c-.47 1.27-1.418 2.832-2.623 4.252-.743.885-1.755 1.938-2.605 2.788A3.456 3.456 0 0010 12.998a3.457 3.457 0 00-.498-.407c-.85-.85-1.862-1.903-2.605-2.788C5.892 8.927 4.944 7.365 4.475 6.094c-.348-.898-.298-1.514-.298-1.514s.616.05 1.514.298c.898.348 1.87.956 2.623 1.492.582-.728 1.477-1.795 1.912-2.401z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Custom Designs</h3>
                <p className="text-gray-600">
                  We tailor every project to meet your specific needs and
                  preferences.
                </p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
              <div className="p-6 bg-white rounded-lg shadow-lg text-center">
                <div className="mb-4">
                  <svg
                    className="w-12 h-12 text-blue-600 mx-auto"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M12 2a1 1 0 01.993.883L13 3v1h4a1 1 0 01.993.883L18 5v4h-2a1 1 0 01-.993-.883L15 8V6h-2v2a1 1 0 01-.883.993L12 9H8a1 1 0 01-.993-.883L7 8V6H5v2a1 1 0 01-.883.993L4 9H2V5a1 1 0 01.883-.993L3 4h4V3a1 1 0 01.883-.993L8 2h4zM7 12h2v2H7v-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Modern Aesthetics</h3>
                <p className="text-gray-600">
                  Incorporate modern designs and trends to create timeless
                  spaces.
                </p>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="w-full md:w-1/3 px-4">
              <div className="p-6 bg-white rounded-lg shadow-lg text-center">
                <div className="mb-4">
                  <svg
                    className="w-12 h-12 text-blue-600 mx-auto"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5 3a1 1 0 011 1v1h8V4a1 1 0 112 0v1h2.5a1.5 1.5 0 011.493 1.356L20 6.5v11a1.5 1.5 0 01-1.356 1.493L18.5 19H1.5a1.5 1.5 0 01-1.493-1.356L0 17.5v-11A1.5 1.5 0 011.356 5H4V4a1 1 0 011-1zm11 5H4v9h12V8zm-3-3H7v2h6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Affordable Pricing</h3>
                <p className="text-gray-600">
                  Enjoy premium interior designs that fit within your budget.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-white mb-6">
            Contact us today to start designing your dream space.
          </p>
          <button
            onClick={handleGetStarted} // Redirect to Login page
            className="px-8 py-3 text-lg bg-white text-blue-600 rounded-lg shadow-md hover:bg-blue-200 hover:shadow-lg transition"
          >
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
