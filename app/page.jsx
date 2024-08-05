"use client";

import Image from "next/image";
import Navbar from "./Components/navbar";
import Galery from "./Components/galery";
import Accordion from "./Components/accordion";
import Footer from "./Components/footer";
import TempatWisata from "./Components/TempatWisata";
import Kritik from "./Components/kritik";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
import { useTheme } from "./ThemeContext";

export default function Home() {
  const { theme } = useTheme();

  // reveal animation

  useEffect(() => {
    ScrollReveal().reveal(".rv1", {
      origin: "bottom",
      distance: "20px",
      duration: 2000,
      delay: 100,
      reset: true, // mengatur apakah animasi harus diulang setiap kali elemen masuk viewport
    });
    ScrollReveal().reveal(".rv2", {
      origin: "bottom",
      distance: "20px",
      duration: 2000,
      delay: 300,
      reset: true, // mengatur apakah animasi harus diulang setiap kali elemen masuk viewport
    });

    ScrollReveal().reveal(".rv3", {
      origin: "bottom",
      distance: "20px",
      duration: 3000,
      delay: 500,
      reset: true, // mengatur apakah animasi harus diulang setiap kali elemen masuk viewport
    });

    ScrollReveal().reveal(".rv4", {
      origin: "bottom",
      distance: "20px",
      duration: 3000,
      delay: 700,
      reset: true, // mengatur apakah animasi harus diulang setiap kali elemen masuk viewport
    });

    ScrollReveal().reveal(".rv5", {
      origin: "bottom",
      distance: "20px",
      duration: 3000,
      delay: 900,
      reset: true, // mengatur apakah animasi harus diulang setiap kali elemen masuk viewport
    });

    ScrollReveal().reveal(".rv6", {
      origin: "bottom",
      distance: "20px",
      duration: 3000,
      delay: 1100,
      reset: true, // mengatur apakah animasi harus diulang setiap kali elemen masuk viewport
    });
  }, []);

  return (
    <main data-theme={theme}>
      <Navbar />
      {/* Hero */}
      <section className="Hero">
        <div className="container px-2 mx-auto min-h-screen flex justify-center items-center">
          {/* hero Tagline */}
          <div className="desc text-center">
            <h1 className="rv1  text-4xl lg:text-6xl text-white font-semibold lg:font-bold">
              Travel, enjoy and <span className=" text-blue-400">live </span>a
              new and full life
            </h1>
            <div className="lg:flex justify-center items-center my-3">
              <p className="rv2  block lg:hidden text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                hic ea eaque? Quod, incidunt qui quis facilis.
              </p>
              <p className="rv2 w-2/3 hidden lg:block text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
                minima blanditiis quod vero architecto ex iure hic ratione ullam{" "}
                rerum incidunt ea accusamus harum laborum, doloremque minus
                tenetur id possimus? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Obcaecati aut esse ipsam quidem iste quisquam
                neque temporibus fugiat est?
              </p>
            </div>
            <button className="btn btn-secondary mt-3 ">
              Lets Explore{" "}
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
            </button>
          </div>
          {/* hero Tagline */}
        </div>
      </section>
      {/* end Hero */}

      <section className="tempatWisata py-10 md:py-20">
        <div className="container mx-auto px-5">
          <div className="text-center">
            <h1 className="text-3xl font-bold rv1">Tourist Attraction</h1>
          </div>
          <div className="flex justify-center">
            <p className="mt-3 rv2 hidden md:block lg:w-2/3 text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consectetur, dolore illum ratione est soluta eos sapiente ut
              necessitatibus, molestias dolor ea voluptatum consequuntur rerum
              iure atque quia nisi in ab!
            </p>
            <p className="mt-3 rv2 md:hidden text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </div>
          <TempatWisata />
        </div>
      </section>

      <section className="galery py-10 md:py-20">
        <div className="container mx-auto px-5">
          <div className="text-center mb-3 md:mb-5">
            <h1 className=" text-3xl font-bold rv1">Trip Inspiration</h1>
            <div className="flex justify-center">
              <p className="mt-3 rv2 lg:w-2/3 hidden md:block">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consectetur, dolore illum ratione est soluta eos sapiente ut
                necessitatibus, molestias dolor ea voluptatum consequuntur rerum
                iure atque quia nisi in ab!
              </p>
              <p className="mt-3 rv2 md:hidden">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </div>
          </div>
          <div className="rv3">
            <Galery />
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20">
        <div className="container mx-auto px-5">
          <div>
            <h1 className="text-3xl rv1 text-center font-bold">
              Frequently Asked Question
            </h1>
          </div>
          <div className="flex justify-center">
            <p className="mt-3 rv2 hidden md:block text-center lg:w-2/3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consectetur, dolore illum ratione est soluta eos sapiente ut
              necessitatibus, molestias dolor ea voluptatum consequuntur rerum
              iure atque quia nisi in ab!
            </p>
            <p className="mt-3 rv2 md:hidden text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </div>
          <div className="mt-5 rv3">
            <Accordion />
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20">
        <div className="container mx-auto px-5 rv1">
          <Kritik />
        </div>
      </section>

      <section>
        <div>
          <Footer />
        </div>
      </section>
    </main>
  );
}
