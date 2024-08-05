"use client";

import Image from "next/image";
import React, { useState } from "react";

// Upload photos
import FotoSatu from "@/public/foto1.jpg";
import FotoDua from "@/public/DSC03260.JPG";
import FotoTiga from "@/public/DSC03280.JPG";
import FotoEmpat from "@/public/DSC03285.JPG";
import FotoLima from "@/public/XHMN2081.JPG";
import FotoEnam from "@/public/XHMN2082.JPG";
import FotoTujuh from "@/public/XHMN2096.JPG";
import FotoDelapan from "@/public/XHMN2121.JPG";
import FotoSembilan from "@/public/XHMN2137.JPG";
import FotoSepuluh from "@/public/XHMN2276.JPG";
import FotoSebelas from "@/public/XHMN2322.JPG";
import FotoDuaBelas from "@/public/XHMN2331.JPG";

const images = {
  "All categories": [
    FotoSatu,
    FotoDua,
    FotoTiga,
    FotoEmpat,
    FotoLima,
    FotoEnam,
    FotoTujuh,
    FotoDelapan,
    FotoSembilan,
    FotoSepuluh,
    FotoSebelas,
    FotoDuaBelas,
    FotoDuaBelas,
    FotoDuaBelas,
  ],
  GunungMertha: [FotoSepuluh, FotoSebelas, FotoDuaBelas],
  ToyaSlaka: [FotoEnam, FotoTujuh, FotoDelapan, FotoSembilan],
  PesiramanDalem: [FotoSatu, FotoDua, FotoTiga, FotoEmpat],
};

export default function Galery() {
  const [selectedCategory, setSelectedCategory] = useState("All categories");
  const [visibleCount, setVisibleCount] = useState(12);

  const handleButtonClick = (category) => {
    setSelectedCategory(category);
    setVisibleCount(12);
    console.log(`Selected category: ${category}`);
  };

  const filteredImages = images[selectedCategory] || [];
  const imagesToShow = filteredImages.slice(0, visibleCount);

  const handleSeeMore = () => {
    setVisibleCount((prevCount) => prevCount + 12);
  };

  return (
    <div>
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        <button
          type="button"
          className={`text-gray-900  -gray-200 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 ${
            selectedCategory === "All categories" ? "bg-blue-700 text-white" : "bg-white"
          }`}
          onClick={() => handleButtonClick("All categories")}
        >
          All categories
        </button>
        <button
          type="button"
          className={`text-gray-900  -gray-200 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 ${
            selectedCategory === "GunungMertha" ? "bg-blue-700 text-white" : "bg-white"
          }`}
          onClick={() => handleButtonClick("GunungMertha")}
        >
          Gunung Mertha
        </button>
        <button
          type="button"
          className={`text-gray-900  -gray-200 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 ${
            selectedCategory === "ToyaSlaka" ? "bg-blue-700 text-white" : "bg-white"
          }`}
          onClick={() => handleButtonClick("ToyaSlaka")}
        >
          Toya Slaka
        </button>
        <button
          type="button"
          className={`text-gray-900  -gray-200 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 ${
            selectedCategory === "PesiramanDalem" ? "bg-blue-700 text-white" : "bg-white"
          }`}
          onClick={() => handleButtonClick("PesiramanDalem")}
        >
          Pesiraman Dalem
        </button>
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
            className="btn btn-secondary"
            onClick={handleSeeMore}
          >
            Show More...
          </button>
        </div>
      )}
    </div>
  );
}
