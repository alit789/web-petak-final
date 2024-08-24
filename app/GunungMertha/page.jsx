"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../Components/navbar";
import Image from "next/image";
import Popup from "../Components/popupDesc"; // Import the Popup component
import { motion } from "framer-motion";

// Gunung Mertha
import GunungMertha1 from "../Img/XHMN3814.jpg";
import GunungMertha2 from "../Img/XHMN3833.jpg";
import GunungMertha3 from "../Img/XHMN3840.jpg";
import GunungMertha4 from "../Img/XHMN3863.jpg";
import GunungMertha5 from "../Img/XHMN3878.jpg";
import GunungMertha6 from "../Img/XHMN3928.jpg";


export default function Page() {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  const [mainImage, setMainImage] = useState(GunungMertha5);

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  return (
    <main className="h-auto">
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto px-5 py-24 lg:py-32"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <motion.div
            className="left rv1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="ImageGunungMertha">
              <div className="grid gap-4">
                <div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <Image
                      width={"100%"}
                      className="h-auto max-w-full rounded-lg"
                      src={mainImage}
                      alt="Main Gunung Mertha Image"
                    />
                  </motion.div>
                </div>
                <div className="grid grid-cols-5 gap-4">
                  {[
                    GunungMertha2,
                    GunungMertha3,
                    GunungMertha4,
                    GunungMertha6,
                    GunungMertha1,
                  ].map((src, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.8,
                        ease: "easeOut",
                        delay: 0.2 * index,
                      }}
                      onClick={() => handleThumbnailClick(src)}
                    >
                      <Image
                        width={"100%"}
                        className="h-auto max-w-full rounded-lg cursor-pointer"
                        src={src}
                        alt={`Gunung Mertha Thumbnail ${index + 1}`}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="right mt-5 lg:mt-0 lg:ps-10 rv1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold">Gunung Mertha</h2>
            <p className="badge badge-lg mt-4 badge-primary">
              Objek Pariwisata
            </p>

            <h2 className="text-xl font-semibold mt-5">The Story : </h2>
            <p className="text-justify mt-2">
              <span className="font-bold">Tirtha Gunung Mertha</span> is a
              remarkable destination that offers an extraordinary blend of
              nature, spirituality, and tradition, all within a single, serene
              location. As you explore this sacred place, you can indulge in the
              pure and revitalizing spring water that flows directly from the
              mountain, providing a unique connection to the earth’s natural
              bounty. Beyond simply experiencing the tranquility of the
              environment, you can embark on thrilling trekking journeys that
              wind through lush landscapes, allowing you to fully immerse
              yourself in the breathtaking beauty and spiritual richness of the
              area. This is a place where every element, from the soothing
              waters to the ancient traditions, comes together to offer a truly
              unparalleled experience of harmony and peace.
            </p>

            <button className="btn btn-primary mt-5" onClick={togglePopup}>
              Watch Video
            </button>
          </motion.div>
        </div>

        <Popup
          isVisible={isPopupVisible}
          onClose={handleClosePopup}
          title="Vidio Dokumentasi Gunung Mertha"
          content="https://www.youtube.com/embed/txTNazu-XIA?si=iBFpjo0lfbAb5A__"
        />

        <motion.section
          className="timeline mt-20 rv1"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        >
          <ol className="relative border-s border-primary">
            {[
              {
                title: "Pura Gunung Mertha",
                description:
                  "Gunung temple immediately has a very unique journey inside The history of its development is based on stories handed down from elders According to local custom, the Mount Merta Temple was once a temple Dalem, apart from this uniqueness, the Gunung Temple also has its own Unique contours in the tri mandala section which usually increases As you get closer to the main mandala, the contour of the temple rises, but in the temple the mountain immediately began to decline.",
              },
              {
                title: "Pasiraman Gunung Mertha",
                description:
                  "One of the attractions in the Gunung Merta Temple area is a beji with the name Pesiraman Tirta Gunung Merta which is located under the Gunung Merta Temple. Usually people carry out wounding activities to ask for safety and healing. The community also uses water from the Tirta Gunung Merta water source as a water source for PDAM Swadaya to meet the clean water needs of the surrounding community.",
              },
              {
                title: "Jalur Tracking",
                description:
                  "Apart from the temple and Beji, in the Gunung Pura area there is also a tracking route that is integrated with Puri Saron. This tracking route is managed by the village pokdarwis independently. This tracking route has many interesting spots such as waterfalls, water sources, hidden canyons, and Grigis rain.",
              },
            ].map((item, index) => (
              <motion.li
                key={index}
                className="mb-10 ms-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: 0.3 * index,
                }}
              >
                <div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -start-1.5 border border-primary"></div>
                <h3 className="text-lg font-semibold text-primary ">
                  {item.title}
                </h3>
                <p className="mb-4 text-base font-normal text-gray-500">
                  {item.description}
                </p>
              </motion.li>
            ))}
          </ol>
        </motion.section>
      </motion.div>
    </main>
  );
}
