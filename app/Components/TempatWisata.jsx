"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const rowsPerPage = 10; // Adjust this value to the number of rows you want per page

export default function TempatWisata() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("All");

  // Penambahan data objek wisata dll

  const data = [
    {
      name: "Pasiraman Gunung Mertha",
      address:
        "Br. Madangan Kaja, Petak, Kec. Gianyar, Kabupaten Gianyar, Bali",
      type: "Objek Wisata",
      gmaps: "https://maps.app.goo.gl/R1s6YwvHRK13UgY49",
    },
    {
      name: "Toya Slaka",
      address: "Jl. Raya Suwat, Petak, Kec. Gianyar, Kabupaten Gianyar, Bali",
      type: "Objek Wisata",
      gmaps: "https://maps.app.goo.gl/kjv4iqq2a5dq2M3J7",
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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          damping: 10,
          delay: 0.3,
        }} // Menambahkan delay 0.5 detik
        className="mb-4 text-end "
      >
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
          <option value="Objek Wisata">Tourist Attraction</option>
          <option value="Penginapan">Homestay</option>
        </select>
      </motion.div>

      <div className="overflow-hidden">
        <table className="table">
          {/* head */}
          <thead className="">
            <tr>
              <th>Place Name</th>
              <th className="hidden md:table-cell">Address</th>
              <th className="hidden md:table-cell">Type</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((row, index) => (
              <motion.tr
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 10,
                  delay: index * 0.1,
                }}
                className=""
              >
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
                    <button className="btn btn-ghost btn-sm">Maps</button>
                  </a>
                </th>
              </motion.tr>
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
