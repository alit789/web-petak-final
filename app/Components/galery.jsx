"use client";

import Image from "next/image";
import React, { useState } from "react";

// Upload photos

// Gunung Mertha
import GunungMertha1 from "@/public/XHMN3814.jpg";
import GunungMertha2 from "@/public/XHMN3833.jpg";
import GunungMertha3 from "@/public/XHMN3840.jpg";
import GunungMertha4 from "@/public/XHMN3863.jpg";
import GunungMertha5 from "@/public/XHMN3878.jpg";
import GunungMertha6 from "@/public/XHMN3928.jpg";
import GunungMertha7 from "@/public/XHMN3947.jpg";



// ricefield
import RiceField from "@/public/XHMN3746.jpg"
import RiceField2 from "@/public/XHMN3738.jpg"
import RiceField3 from "@/public/XHMN3756.jpg"


const images = {
  "All categories": [
    GunungMertha1,
    GunungMertha2,
    GunungMertha3,
    GunungMertha4,
    GunungMertha5,
    GunungMertha6,
    GunungMertha7,
    RiceField,
    RiceField2,
    RiceField3,
  ],
  "Gunung Mertha": [GunungMertha1, GunungMertha2, GunungMertha3 , GunungMertha4 ,GunungMertha5, GunungMertha6 ,GunungMertha7],
  "Toya Slaka": [RiceField,RiceField2,RiceField3],
  "Pesiraman Dalem": [],
};

export default function Galery() {
  const [selectedCategory, setSelectedCategory] = useState("All categories");
  const [visibleCount, setVisibleCount] = useState(12);

  const handleButtonClick = (category) => {
    setSelectedCategory(category);
    setVisibleCount(12);
  };

  const filteredImages = images[selectedCategory] || [];
  const imagesToShow = filteredImages.slice(0, visibleCount);

  const handleSeeMore = () => {
    setVisibleCount((prevCount) => prevCount + 12);
  };

  return (
    <div>
      <div className="hidden md:flex items-center justify-center py-4 md:py-8 flex-wrap">
        {Object.keys(images).map((category) => (
          <button
            key={category}
            type="button"
            className={`text-gray-900 hover:bg-primary focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base hover:text-white font-medium px-5 py-2.5 text-center me-3 mb-3 ${
              selectedCategory === category ? " bg-primary text-white" : "bg-white"
            }`}
            onClick={() => handleButtonClick(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="md:hidden py-4 md:py-8">
        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          className="btn btn-primary w-full"
          type="button"
          onClick={() => document.getElementById("dropdown").classList.toggle("hidden")}
        >
          {selectedCategory}
          <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
          </svg>
        </button>
        <div id="dropdown" className="z-10 mt-3 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-full ">
          <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownDefaultButton">
            {Object.keys(images).map((category) => (
              <li key={category}>
                <div
                  className="block cursor-pointer px-4 py-2 hover:bg-gray-100"
                  onClick={() => {
                    handleButtonClick(category);
                    document.getElementById("dropdown").classList.add("hidden");
                  }}
                >
                  {category}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {imagesToShow.map((src, index) => (
          <div key={index}>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={src}
              alt={`Image ${index + 1}`}
            />
          </div>
        ))}
      </div>
      {filteredImages.length > visibleCount && (
        <div className="flex justify-center py-4 mt-5">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSeeMore}
          >
            Show More...
          </button>
        </div>
      )}
    </div>
  );
}
