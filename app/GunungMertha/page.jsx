"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../Components/navbar";
import Timeline from "../Components/timeline";
import Image from "next/image";
import Popup from "../Components/popupDesc"; // Import the Popup component

// Gunung Mertha
import GunungMertha1 from "@/public/XHMN3814.jpg";
import GunungMertha2 from "@/public/XHMN3833.jpg";
import GunungMertha3 from "@/public/XHMN3840.jpg";
import GunungMertha4 from "@/public/XHMN3863.jpg";
import GunungMertha5 from "@/public/XHMN3878.jpg";
import GunungMertha6 from "@/public/XHMN3928.jpg";

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

  useEffect(() => {
    if (typeof window !== "undefined") {
      const ScrollReveal = require("scrollreveal").default;

      ScrollReveal().reveal(".rv1", {
        origin: "bottom",
        distance: "20px",
        duration: 2000,
        delay: 100,
        reset: true,
      });
    }
  }, []);

  return (
    <main className="h-auto">
      <Navbar />
      <div className="container mx-auto px-5 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="left rv1">
            <div className="ImageGunungMertha">
              <div className="grid gap-4">
                <div>
                  <Image
                    className="h-auto max-w-full rounded-lg"
                    src={mainImage}
                    alt="Main Gunung Mertha Image"
                  />
                </div>
                <div className="grid grid-cols-5 gap-4">
                  <div onClick={() => handleThumbnailClick(GunungMertha2)}>
                    <Image
                      className="h-auto max-w-full rounded-lg cursor-pointer"
                      src={GunungMertha2}
                      alt="Gunung Mertha Thumbnail 2"
                    />
                  </div>
                  <div onClick={() => handleThumbnailClick(GunungMertha3)}>
                    <Image
                      className="h-auto max-w-full rounded-lg cursor-pointer"
                      src={GunungMertha3}
                      alt="Gunung Mertha Thumbnail 3"
                    />
                  </div>
                  <div onClick={() => handleThumbnailClick(GunungMertha4)}>
                    <Image
                      className="h-auto max-w-full rounded-lg cursor-pointer"
                      src={GunungMertha4}
                      alt="Gunung Mertha Thumbnail 4"
                    />
                  </div>
                  <div onClick={() => handleThumbnailClick(GunungMertha6)}>
                    <Image
                      className="h-auto max-w-full rounded-lg cursor-pointer"
                      src={GunungMertha6}
                      alt="Gunung Mertha Thumbnail 6"
                    />
                  </div>
                  <div onClick={() => handleThumbnailClick(GunungMertha1)}>
                    <Image
                      className="h-auto max-w-full rounded-lg cursor-pointer"
                      src={GunungMertha1}
                      alt="Gunung Mertha Thumbnail 1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right mt-5 lg:mt-0 lg:ps-10 rv1">
            <h2 className="text-3xl font-bold">Gunung Mertha</h2>
            <p className="badge badge-lg mt-4 badge-primary">
              Objek Pariwisata
            </p>

            <h2 className="text-xl font-semibold mt-5">The Story : </h2>
            <p className=" text-justify mt-2">
              <span className=" font-bold">Tirtha Gunung Mertha</span> is a
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
              Watch Vidio
            </button>
          </div>
        </div>

        <Popup
          isVisible={isPopupVisible}
          onClose={handleClosePopup}
          title="Vidio Dokumentasi Gunung Mertha"
          content="https://www.youtube.com/embed/O3WCkYeNKNg?si=LYi57vu5Byyd9Cdf"
        />

        <section className="timeline mt-20 rv1">
          <ol className="relative border-s border-primary">
            {/* new line */}
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -start-1.5 border border-primary"></div>
              <h3 className="text-lg font-semibold text-primary ">
                Pura Gunung Mertha
              </h3>
              <p className="mb-4 text-base font-normal text-gray-500">
                Pura gunung merta memiliki perjalanan yang sangat unik dalam
                sejarah perkembangannya menurut cerita turun temurun dari tetua
                adat setempat pura gunung merta dulunya merupakan sebuah pura
                dalem, selain keunikan tersebut pura gunung merta juga memiliki
                kontur yang unik di bagian tri mandalanya yang biasanya semakin
                mendekat ke utama mandala kontur pura semakin naik namun di pura
                gunung merta semakin menurun.
              </p>
            </li>

            {/* new line */}
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -start-1.5 border border-primary"></div>
              <h3 className="text-lg font-semibold text-primary ">
                Pasiraman Gunung Mertha
              </h3>
              <p className="text-base font-normal text-gray-500">
                Salah satu daya tarik di kawasan pura gunung merta terdapat beji
                dengan nama pesiraman tirta gunung merta yang terletak di bawah
                pura gunung merta. Biasanya masyarakat melaksanakan kegiatan
                melukat untuk memohon keselamatan dan kesembuhan. Masyarakat
                juga memanfaatkan air dari pesiraman tirta gunung merta sebagai
                sumber air pdam swadaya untuk memenuhi kebutuhan air bersih
                masyarakat sekitar
              </p>
            </li>

            {/* new line */}
            <li className="ms-4">
              <div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -start-1.5 border border-primary"></div>
              <h3 className="text-lg font-semibold text-primary ">
                Jalur Tracking
              </h3>
              <p className="text-base font-normal text-gray-500">
                Selain pura dan beji di kawasan pura gunung merta terdapat jalur
                tracking yang terintegrasi dengan puri saron. Jalur tracking ini
                dikelola oleh pokdarwis desa secara swadaya. Jalur tracking ini
                memiliki banyak spot menarik seperti air terjun, sumber air,
                hiden canyon, dan ujan grigis.
              </p>
            </li>
          </ol>
        </section>
      </div>
    </main>
  );
}
