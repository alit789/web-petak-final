'use client';

import React from 'react';

export default function Popup({ isVisible, onClose, title, content }) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 text-gray-800 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-none lg:rounded-lg h-full shadow-lg max-w-lg lg:max-w-4xl lg:h-auto w-full">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <div className="overflow-y-auto lg:max-h-96 text-justify mb-4" id='popup'>
          {content}
        </div>
        <button
          onClick={onClose}
          className="btn btn-primary"
        >
          Close
        </button>
      </div>
    </div>
  );
}
