"use client";

import Image from "next/image";
import Navbar from "./Components/navbar";
import Galery from "./Components/galery";
import Accordion from "./Components/accordion";
import Footer from "./Components/footer";
import TempatWisata from "./Components/TempatWisata";
import Kritik from "./Components/kritik";
import { motion } from "framer-motion";

import Popup from "./Components/popupDesc";

import { useEffect, useState } from "react";
import { useTheme } from "./ThemeContext";

export default function Home() {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  const { theme } = useTheme();

  return (
    <main className="w-full overflow-hidden" data-theme={theme}>
      {/* Navbar */}
      <Navbar />
      {/* End  Navbar */}

      {/* Hero */}
      <section className="Hero">
        <div className="container px-5 mx-auto min-h-screen flex justify-center items-center">
          {/* hero Tagline */}
          <div className="desc text-center">
            <div className="rv1">
              {/* Headline Hero */}
              <motion.h1
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", damping: 10 }}
                className=" text-4xl lg:text-6xl text-white font-semibold lg:font-bold"
              >
                Finding your new journey with nature
              </motion.h1>
              {/* End Headline Hero */}
            </div>
            <div className="lg:flex rv1 justify-center items-center my-3">
              {/* Desc Hero */}
              {/* Phone Desc */}
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  damping: 10,
                  delay: 0.3,
                }}
                className=" block lg:hidden text-white"
              >
                Discover the joy of creating lasting memories as you explore the
                stunning natural landscapes of Petak.
              </motion.p>
              {/* End Phone Desc */}
              {/* PC Desc */}
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  damping: 10,
                  delay: 0.3,
                }}
                className=" w-2/3 text-lg hidden lg:block text-white"
              >
                Discover the joy of creating lasting memories as you explore the
                stunning natural landscapes of Petak, where every encounter with
                nature promises an experience that will captivate your heart and
                soul
              </motion.p>
              {/* End PC Desc */}
              {/* End Desc Hero */}
            </div>
            <div className="rv1">
              <motion.button
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  damping: 10,
                  delay: 0.3,
                }}
                onClick={togglePopup}
                className="btn btn-primary mt-3"
              >
                Watch Video{" "}
                <span style={{ marginTop: "2px" }}>
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </span>
              </motion.button>
            </div>
          </div>
          {/* hero Tagline */}
        </div>
      </section>
      {/* end Hero */}

      {/* Popup Vidio */}
      <Popup
        isVisible={isPopupVisible}
        onClose={handleClosePopup}
        title="Pura Gunung Mertha"
        content="https://www.youtube.com/embed/txTNazu-XIA?si=iBFpjo0lfbAb5A__"
      />
      {/* End Popup Vidio */}

      {/* Tempat Wisata */}
      <section className="tempatWisata py-10 md:py-20">
        <div className="container mx-auto px-5">
          <div className="text-center rv1">
            {/* Tourist Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", damping: 10 }}
              className="text-3xl font-bold text-primary"
            >
              Tourist Attraction
            </motion.h1>
            {/* End Tourist Title */}
          </div>
          <div className="flex justify-center rv1">
            {/* Tourist Desc Title */}
            {/* Desc PC */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 10,
                delay: 0.2,
              }}
              className="mt-3 hidden md:block lg:w-2/3 text-center"
            >
              Find your best attraction based on your preferences and create
              your own itinerary
            </motion.p>
            {/* End Desc PC */}
            {/* Desc Phone */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 10,
                delay: 0.5,
              }}
              className="mt-3 rv1 md:hidden text-center"
            >
              Find your best attraction based on your preferences and create
              your own itinerary
            </motion.p>
            {/* End Desc Phone */}
            {/* End Tourist Desc Title */}
          </div>
          <TempatWisata />
        </div>
      </section>
      {/* End Tempat Wisata */}

      {/* Galery */}
      <section id="Galery" className="py-10 md:py-20">
        <div className="container mx-auto px-5">
          <div className="text-center mb-3 md:mb-5">
            <div className="rv1">
              {/* Trip Inspiration Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  damping: 10,
                }} // Menambahkan delay 0.5 detik
                className="text-3xl font-bold text-primary"
              >
                Trip Inspiration
              </motion.h1>
              {/* End Trip Inspiration Title */}
            </div>
            <div className="flex rv1 justify-center">
              {/* Trip Inspiration Desc */}
              {/* Desc PC */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  damping: 10,
                  delay: 0.3,
                }}
                className="mt-3 lg:w-2/3 hidden md:block"
              >
                some inspiration for you to create your imaginary about our
                places
              </motion.p>
              {/* End Desc PC */}
              {/* Desc Phone */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  damping: 10,
                  delay: 0.3,
                }}
                className="mt-3 md:hidden"
              >
                some inspiration for you to create your imaginary about our
                places
              </motion.p>
              {/* End Desc Phone */}
              {/* End Trip Inspiration Desc */}
            </div>
          </div>
          <div className="rv1">
            <Galery />
          </div>
        </div>
      </section>
      {/* End Galery */}

      {/* FAQ */}
      <section className="py-10 md:py-20 Faq">
        <div className="container mx-auto px-5">
          <div className="rv1">
            {/* FAQ Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 10,
              }}
              className="text-3xl text-center font-bold text-primary"
            >
              Frequently Asked Question
            </motion.h1>
            {/* End FAQ Title */}
          </div>
          <div className="flex rv1 justify-center">
            {/* Desc FAQ */}
            {/* Desc PC */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 10,
                delay: 0.3,
              }}
              className="mt-3 hidden md:block text-center lg:w-2/3"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consectetur, dolore illum ratione est soluta eos sapiente ut
              necessitatibus, molestias dolor ea voluptatum consequuntur rerum
              iure atque quia nisi in ab!
            </motion.p>
            {/* End Desc PC */}
            {/* Desc Phone */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 10,
                delay: 0.3,
              }}
              className="mt-3 md:hidden text-center"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </motion.p>
            {/* End Desc Phone */}
            {/* End Desc FAQ */}
          </div>
          <div className="mt-5 rv1">
            <Accordion />
          </div>
        </div>
      </section>
      {/* End FAQ */}

      {/* Kritik */}
      <section className="py-10 md:py-20 Kritik">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            damping: 10,
          }}
          className="container mx-auto px-5 rv1"
        >
          <Kritik />
        </motion.div>
      </section>
      {/* End Kritik */}

      {/* Footer */}
      <section>
        <div>
          <Footer />
        </div>
      </section>
      {/* End Footer */}
    </main>
  );
}
