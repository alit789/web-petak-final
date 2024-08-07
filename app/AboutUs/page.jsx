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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                culpa veritatis ad! Deleniti odio quam impedit, quae saepe ut,
                dolorum molestiae obcaecati neque consectetur et reiciendis quis
                ad repellat iste?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
