"use client";

import React, { useState } from "react";

const rowsPerPage = 10; // Adjust this value to the number of rows you want per page

export default function TempatWisata() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("All");

  // Penambahan data objek wisata dll

  const data = [
    {
      name: "Pasiraman Gunung Mertha",
      address:
        "Jalan Pura, Gunung Mertha, Kec. Gianyar, Kabupaten Gianyar, Bali.",
      type: "Objek Wisata",
      gmaps: "https://g.co/kgs/HkYc2en",
    },
    {
      name: "Toya Slaka",
      address: "Jl. Raya Suwat, Petak, Kec. Gianyar, Kabupaten Gianyar, Bali",
      type: "Penginapan",
    },
    {
      name: "Pasiraman Dalem",
      address:
        "Jalan Pura, Gunung Mertha, Kec. Gianyar, Kabupaten Gianyar, Bali.",
      type: "Kuliner",
    },
    {
      name: "Toya Bulan",
      address:
        "Jalan Pura, Gunung Mertha, Kec. Gianyar, Kabupaten Gianyar, Bali.",
      type: "Merchandise",
    },
    {
      name: "Toya Slaka",
      address: "Jl. Raya Suwat, Petak, Kec. Gianyar, Kabupaten Gianyar, Bali",
      type: "Penginapan",
    },
    {
      name: "Toya Slaka",
      address: "Jl. Raya Suwat, Petak, Kec. Gianyar, Kabupaten Gianyar, Bali",
      type: "Penginapan",
    },
    {
      name: "Toya Slaka",
      address: "Jl. Raya Suwat, Petak, Kec. Gianyar, Kabupaten Gianyar, Bali",
      type: "Penginapan",
    },
    {
      name: "Pasiraman Dalem",
      address:
        "Jalan Pura, Gunung Mertha, Kec. Gianyar, Kabupaten Gianyar, Bali.",
      type: "Kuliner",
    },
    {
      name: "Pasiraman Dalem",
      address:
        "Jalan Pura, Gunung Mertha, Kec. Gianyar, Kabupaten Gianyar, Bali.",
      type: "Kuliner",
    },

    {
      name: "Pasiraman Gunung Mertha",
      address:
        "Jalan Pura, Gunung Mertha, Kec. Gianyar, Kabupaten Gianyar, Bali.",
      type: "Objek Wisata",
      gmaps: "https://g.co/kgs/HkYc2en",
    },
    {
      name: "Toya Slaka",
      address: "Jl. Raya Suwat, Petak, Kec. Gianyar, Kabupaten Gianyar, Bali",
      type: "Penginapan",
    },
    {
      name: "Pasiraman Dalem",
      address:
        "Jalan Pura, Gunung Mertha, Kec. Gianyar, Kabupaten Gianyar, Bali.",
      type: "Kuliner",
    },
    {
      name: "Toya Bulan",
      address:
        "Jalan Pura, Gunung Mertha, Kec. Gianyar, Kabupaten Gianyar, Bali.",
      type: "Merchandise",
    },

    {
      name: "Pasiraman Gunung Mertha",
      address:
        "Jalan Pura, Gunung Mertha, Kec. Gianyar, Kabupaten Gianyar, Bali.",
      type: "Objek Wisata",
      gmaps: "https://g.co/kgs/HkYc2en",
    },
    {
      name: "Toya Slaka",
      address: "Jl. Raya Suwat, Petak, Kec. Gianyar, Kabupaten Gianyar, Bali",
      type: "Penginapan",
    },
    {
      name: "Pasiraman Dalem",
      address:
        "Jalan Pura, Gunung Mertha, Kec. Gianyar, Kabupaten Gianyar, Bali.",
      type: "Kuliner",
    },
    {
      name: "Toya Bulan",
      address:
        "Jalan Pura, Gunung Mertha, Kec. Gianyar, Kabupaten Gianyar, Bali.",
      type: "Merchandise",
    },
    // tambah data
  ];

  // End Penambahan Data Objek Wisata

  // Filter data based on the selected type
  const filteredData =
    filter === "All" ? data : data.filter((item) => item.type === filter);

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  const currentData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 1) return pages;

    pages.push(1);
    if (currentPage > 3) pages.push("...");
    if (currentPage > 2) pages.push(currentPage - 1);
    if (currentPage > 1 && currentPage < totalPages) pages.push(currentPage);
    if (currentPage < totalPages - 1) pages.push(currentPage + 1);
    if (currentPage < totalPages - 2) pages.push("...");
    pages.push(totalPages);

    return pages;
  };

  return (
    <div className="mt-10">
      {/* Filter dropdown */}
      <div className="mb-4 text-end rv1">
        <label htmlFor="typeFilter" className="mr-2">
          Filter by Type :
        </label>
        <select
          id="typeFilter"
          className="select select-bordered"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Objek Wisata">Objek Wisata</option>
          <option value="Penginapan">Penginapan</option>
          <option value="Kuliner">Kuliner</option>
          <option value="Merchandise">Merchandise</option>
        </select>
      </div>

      <div className="overflow-hidden">
        <table className="table">
          {/* head */}
          <thead className="rv1">
            <tr>
              <th>Place Name</th>
              <th className="hidden md:table-cell">Address</th>
              <th className="hidden md:table-cell">Type</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((row, index) => (
              <tr key={index} className="rv1">
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
                  <span
                    className={`badge ${
                      row.type === "Objek Wisata"
                        ? "badge-primary"
                        : row.type === "Penginapan"
                        ? "badge-secondary"
                        : row.type === "Kuliner"
                        ? "badge-accent"
                        : row.type === "Merchandise"
                        ? "badge-success"
                        : "badge-warning"
                    }  badge-md hidden md:block`}
                  >
                    {row.type}
                  </span>
                </td>
                <th>
                  <a href={row.gmaps}>
                    <button className="btn btn-ghost btn-sm">details</button>
                  </a>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Render pagination only if there are multiple pages */}
      {totalPages > 1 && (
        <div className="join mt-4 flex justify-center">
          {getPageNumbers().map((page, index) => (
            <button
              key={index}
              className={`join-item btn ${
                currentPage === page ? "btn-primary" : ""
              }`}
              onClick={() => page !== "..." && setCurrentPage(page)}
              disabled={page === "..."}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
