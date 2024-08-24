"use client";

import React from "react";
import Navbar from "../Components/navbar";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-5">
        <div className="h-screen flex justify-center items-center">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 10,
              }}
              className=" text-2xl"
            >
              Our Team
            </motion.h1>
            <div className="flex justify-center">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  damping: 10,
                  delay:0.3
                }}
                className="mt-3 md:w-2/3"
              >
                This website was made by Udayana University students who have
                community service in Petak Village in 2024. This website has the
                purpose of supporting the nature destination located in Petak,
                Gianyar.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
