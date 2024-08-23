"use client";

import React from "react";

export default function Popup({ isVisible, onClose, title, content }) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-90 flex justify-center items-center z-50">
      <div className="relative w-11/12 lg:w-3/4 h-5/6 lg:h-3/4 p-6 rounded-lg flex flex-col justify-center items-center">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-600 hover:text-gray-800"
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="#fff"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="text-2xl text-white font-bold mb-4">{title}</h2>
        <div className="w-full h-full flex justify-center items-center mb-4">
          <iframe
            width="100%"
            height="100%"
            src={content}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
