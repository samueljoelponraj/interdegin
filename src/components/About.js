import React from "react";

const About = () => {
  const reviews = [
    {
      name: "John Doe",
      review: "Inter Design transformed my living room into a masterpiece. The team was professional, and the result exceeded my expectations!",
      rating: 5,
    },
    {
      name: "Jane Smith",
      review: "The design for my office was modern and functional. I'm so impressed with the creativity and attention to detail.",
      rating: 4,
    },
    {
      name: "Samuel Green",
      review: "Excellent service and beautiful designs. The team really listened to my needs and delivered beyond what I imagined.",
      rating: 5,
    },
  ];

  return (
    <div className="bg-gray-100 text-gray-800">
      {/* About Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-6">About Us</h1>
          <p className="text-lg mb-8">
            At <span className="text-blue-300 font-semibold">Inter Design</span>, we specialize in creating bespoke interior designs that reflect your unique style and needs. With years of experience, our talented team is dedicated to transforming spaces into beautiful, functional works of art.
          </p>
          <img
            src="https://source.unsplash.com/800x400/?interior,team"
            alt="Our Team"
            className="rounded-lg shadow-lg mx-auto"
          />
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
            What Our Customers Say
          </h2>
          <div className="flex flex-wrap -mx-4">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="w-full md:w-1/3 px-4 mb-8"
              >
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">{review.name}</h3>
                  <p className="text-gray-600 italic mb-4">"{review.review}"</p>
                  <div className="flex justify-center">
                    {Array.from({ length: review.rating }, (_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927C9.438 2.378 10 2 10 2s.562.378.951.927c.435.606 1.33 1.673 1.912 2.401a12.295 12.295 0 012.623-1.492c.898-.333 1.514-.298 1.514-.298s.05.616-.298 1.514c-.47 1.27-1.418 2.832-2.623 4.252-.743.885-1.755 1.938-2.605 2.788A3.456 3.456 0 0010 12.998a3.457 3.457 0 00-.498-.407c-.85-.85-1.862-1.903-2.605-2.788C5.892 8.927 4.944 7.365 4.475 6.094c-.348-.898-.298-1.514-.298-1.514s.616.05 1.514.298c.898.348 1.87.956 2.623 1.492.582-.728 1.477-1.795 1.912-2.401z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Let's Create Your Dream Space
          </h2>
          <p className="mb-6">
            Contact us today to get started on your next interior design project.
          </p>
          <a
            href="/contact"
            className="px-8 py-3 bg-white text-blue-600 rounded-lg shadow-md hover:bg-blue-200 hover:shadow-lg transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
