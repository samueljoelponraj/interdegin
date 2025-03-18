import React, { useState } from "react";
import id1 from "../assets/id1.png";
import td1 from "../assets/3d1.png";
import id2 from "../assets/id2.png";
import td2 from "../assets/3d2.png";
import id3 from "../assets/id3.png";
import td3 from "../assets/3d3.png";
import id4 from "../assets/id4.png";
import td4 from "../assets/3d4.png";
import id5 from "../assets/id5.png";
import td5 from "../assets/3d5.png";
import id6 from "../assets/id6.png";
import td6 from "../assets/3d6.png";
import id7 from "../assets/id7.png";
import td7 from "../assets/3d7.png";
import id8 from "../assets/id8.png";
import td8 from "../assets/3d8.png";

const DesignDisplay = () => {
  // State to store the selected square footage
  const [selectedSqFt, setSelectedSqFt] = useState("");

  // Sample design data for 8 designs
  const designs = [
    { id: 1, sqFt: 900, title: "Compact Apartment", description: "A compact design for small spaces.", image2D: id1, image3D: td1 },
    { id: 2, sqFt: 1000, title: "Spacious Home", description: "A spacious design for medium-sized homes.", image2D: id2, image3D: td2 },
    { id: 3, sqFt: 1200, title: "Luxury Villa", description: "A luxurious design for large homes.", image2D: id3, image3D: td3 },
    { id: 4, sqFt: 1300, title: "Modern Office", description: "An innovative design for a modern office.", image2D: id4, image3D: td4 },
    { id: 5, sqFt: 1400, title: "Small Studio", description: "Perfect for single-room studios or tiny homes.", image2D: id5, image3D: td5 },
    { id: 6, sqFt: 1500, title: "Elegant Mansion", description: "An elegant design for a luxurious mansion.", image2D: id6, image3D: td6 },
    { id: 7, sqFt: 1800, title: "Family House", description: "A perfect home for a family of 4-6 people.", image2D: id7, image3D: td7 },
    { id: 8, sqFt: 4800, title: "Luxury Estate", description: "A grand design for an opulent estate.", image2D: id8, image3D: td8 },
  ];

  // Extract unique square footage options
  const squareFeetOptions = [...new Set(designs.map(design => design.sqFt))].sort((a, b) => a - b);

  // Filter designs based on selected square footage
  const filteredDesigns = designs.filter(
    (design) => selectedSqFt && design.sqFt === Number(selectedSqFt)
  );

  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-12">
          Interior Design Display
        </h1>

        {/* Dropdown for Square Footage */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Select Square Footage
          </h2>
          <div className="flex justify-center mb-8">
            <select
              value={selectedSqFt}
              onChange={(e) => setSelectedSqFt(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">-- Select Square Ft --</option>
              {squareFeetOptions.map((sqFt) => (
                <option key={sqFt} value={sqFt}>{sqFt} sq ft</option>
              ))}
            </select>
          </div>

          {/* Display Filtered Designs */}
          {filteredDesigns.length > 0 ? (
            filteredDesigns.map((design) => (
              <div key={design.id} className="mb-12 bg-gray-50 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-blue-700 mb-4">{design.title}</h3>
                <p className="text-lg text-gray-600 mb-6">{design.description}</p>
                <div className="flex flex-wrap -mx-4">
                  <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
                    <h4 className="text-xl font-semibold text-blue-700 mb-4">2D Design</h4>
                    <img src={design.image2D} alt={`${design.title} 2D`} className="rounded-lg shadow-lg" />
                  </div>
                  <div className="w-full md:w-1/2 px-4">
                    <h4 className="text-xl font-semibold text-blue-700 mb-4">3D Design</h4>
                    <img src={design.image3D} alt={`${design.title} 3D`} className="rounded-lg shadow-lg" />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 text-lg">
              {selectedSqFt
                ? "No designs found for the selected square footage. Please try different values."
                : "Select square footage to view available designs."}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DesignDisplay;
