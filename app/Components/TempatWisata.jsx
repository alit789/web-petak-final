"use client";

import React, { useState } from "react";

const rowsPerPage = 10; // Adjust this value to the number of rows you want per page

export default function TempatWisata() {
  const [currentPage, setCurrentPage] = useState(1);

  const data = [
    { name: "Pasiraman Gunung Mertha", address: "Jalan Pura, Gunung Mertha, Kec. Gianyar, Kabupaten Gianyar, Bali.", type: "Holy" },
    { name: "Toya Slaka", address: "Jl. Raya Suwat, Petak, Kec. Gianyar, Kabupaten Gianyar, Bali", type: "Waterfall" },
    { name: "Pasiraman Dalem", address: "Jalan Pura, Gunung Mertha, Kec. Gianyar, Kabupaten Gianyar, Bali.", type: "Holy" },
    { name: "Toya Bulan", address: "Jalan Pura, Gunung Mertha, Kec. Gianyar, Kabupaten Gianyar, Bali.", type: "Family" },
    { name: "Pasiraman Gunung Mertha", address: "Jalan Pura, Gunung Mertha, Kec. Gianyar, Kabupaten Gianyar, Bali.", type: "Nature" },
    // Add more rows as needed
    { name: "Pasiraman Gunung Mertha", address: "Jalan Pura, Gunung Mertha, Kec. Gianyar, Kabupaten Gianyar, Bali.", type: "Holy" },
    { name: "Toya Slaka", address: "Jl. Raya Suwat, Petak, Kec. Gianyar, Kabupaten Gianyar, Bali", type: "Waterfall" },
    { name: "Pasiraman Dalem", address: "Jalan Pura, Gunung Mertha, Kec. Gianyar, Kabupaten Gianyar, Bali.", type: "Holy" },
    
    { name: "Pasiraman Gunung Mertha", address: "Jalan Pura, Gunung Mertha, Kec. Gianyar, Kabupaten Gianyar, Bali.", type: "Holy" },
    { name: "Toya Slaka", address: "Jl. Raya Suwat, Petak, Kec. Gianyar, Kabupaten Gianyar, Bali", type: "Waterfall" },
    { name: "Pasiraman Dalem", address: "Jalan Pura, Gunung Mertha, Kec. Gianyar, Kabupaten Gianyar, Bali.", type: "Holy" },
    
    { name: "Pasiraman Gunung Mertha", address: "Jalan Pura, Gunung Mertha, Kec. Gianyar, Kabupaten Gianyar, Bali.", type: "Holy" },
    { name: "Toya Slaka", address: "Jl. Raya Suwat, Petak, Kec. Gianyar, Kabupaten Gianyar, Bali", type: "Waterfall" },
    { name: "Pasiraman Dalem", address: "Jalan Pura, Gunung Mertha, Kec. Gianyar, Kabupaten Gianyar, Bali.", type: "Holy" },
    
  ];

  const totalPages = Math.ceil(data.length / rowsPerPage);

  const currentData = data.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  const getPageNumbers = () => {
    const pages = [];
    pages.push(1);
    if (currentPage > 3) pages.push('...');
    if (currentPage > 2) pages.push(currentPage - 1);
    if (currentPage > 1 && currentPage < totalPages) pages.push(currentPage);
    if (currentPage < totalPages - 1) pages.push(currentPage + 1);
    if (currentPage < totalPages - 2) pages.push('...');
    pages.push(totalPages);
    return pages;
  };

  return (
    <div className="mt-10">
      <div className="overflow-hidden">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Place Name</th>
              <th className="hidden md:table-cell">Address</th>
              <th className="hidden md:table-cell">Type</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((row, index) => (
              <tr key={index} className="rv2">
                <td>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-bold">{row.name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge hidden md:block badge-ghost badge-md">
                    {row.address}
                  </span>
                </td>
                <td>
                  <span className={`badge badge-${row.type === 'Holy' ? 'primary' : row.type === 'Waterfall' ? 'secondary' : row.type === 'Family' ? 'accent' : row.type === "Nature" ? 'success' : 'primary'}  badge-md hidden md:block`}>
                    {row.type}
                  </span>
                </td>
                <th>
                  <button className="btn btn-ghost btn-sm">details</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="join mt-4 flex justify-center">
        {getPageNumbers().map((page, index) => (
          <button
            key={index}
            className={`join-item btn ${currentPage === page ? "btn-primary" : ""}`}
            onClick={() => page !== '...' && setCurrentPage(page)}
            disabled={page === '...'}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}
