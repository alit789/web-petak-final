"use client";

import React from "react";

export default function TempatWisata() {
  return (
    <div className="mt-10">
      <div className="overflow-x-auto">
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


            {/* row 1 */}
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div>
                    <div className="font-bold">Pasiraman Gunung Mertha</div>
                  </div>
                </div>
              </td>
              <td>
                <span className="badge hidden md:block badge-ghost badge-md">
                  Jalan Pura, Gunung Mertha, Kec. Gianyar, Kabupaten Gianyar,
                  Bali.
                </span>
              </td>
              <td>
                <span className="badge badge-primary badge-md hidden md:block">Holy</span>
              </td>
              <th>
                <button className="btn btn-ghost btn-sm">details</button>
              </th>
            </tr>

            {/* row 2 */}
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div>
                    <div className="font-bold">Toya Slaka</div>
                  </div>
                </div>
              </td>
              <td>
                <span className="badge hidden md:block badge-ghost badge-md">
                  Jalan Pura, Gunung Mertha, Kec. Gianyar, Kabupaten Gianyar,
                  Bali.
                </span>
              </td>
              <td>
                <span className="badge badge-secondary badge-md hidden md:block">Waterfall</span>
              </td>
              <th>
                <button className="btn btn-ghost btn-sm">details</button>
              </th>
            </tr>

            {/* row 3 */}
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div>
                    <div className="font-bold">Pasiraman Dalem</div>
                  </div>
                </div>
              </td>
              <td>
                <span className="badge hidden md:block badge-ghost badge-md">
                  Jalan Pura, Gunung Mertha, Kec. Gianyar, Kabupaten Gianyar,
                  Bali.
                </span>
              </td>
              <td>
                <span className="badge badge-primary badge-md hidden md:block">Holy</span>
              </td>
              <th>
                <button className="btn btn-ghost btn-sm">details</button>
              </th>
            </tr>

            {/* row 4 */}
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div>
                    <div className="font-bold">Toya Bulan</div>
                  </div>
                </div>
              </td>
              <td>
                <span className="badge hidden md:block badge-ghost badge-md">
                  Jalan Pura, Gunung Mertha, Kec. Gianyar, Kabupaten Gianyar,
                  Bali.
                </span>
              </td>
              <td>
                <span className="badge badge-accent badge-md hidden md:block">Family</span>
              </td>
              <th>
                <button className="btn btn-ghost btn-sm">details</button>
              </th>
            </tr>

            {/* row 5 */}
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div>
                    <div className="font-bold">Pasiraman Gunung Mertha</div>
                  </div>
                </div>
              </td>
              <td>
                <span className="badge hidden md:block badge-ghost badge-md">
                  Jalan Pura, Gunung Mertha, Kec. Gianyar, Kabupaten Gianyar,
                  Bali.
                </span>
              </td>
              <td>
                <span className="badge badge-primary badge-md hidden md:block">Nature</span>
              </td>
              <th>
                <button className="btn btn-ghost btn-sm">details</button>
              </th>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
}
