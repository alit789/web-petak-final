"use client";

import React from "react";
import Navbar from "../Components/navbar";

export default function AboutUs() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-5">
        <div className="h-screen flex justify-center items-center">
          <div className="text-center">
            <h1 className=" text-2xl">Our Team</h1>
            <div className="flex justify-center">
              <p className="mt-3 md:w-2/3">
                This website was made by Udayana University students who have
                community service in Petak Village in 2024. This website has the
                purpose of supporting the nature destination located in Petak,
                Gianyar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
