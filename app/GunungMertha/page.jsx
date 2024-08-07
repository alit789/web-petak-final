"use client";
import React from "react";
import Navbar from "../Components/navbar";
import Timeline from "../Components/timeline";
import Image from "next/image";

// Gunung Mertha
import GunungMertha1 from "@/public/XHMN3814.jpg";
import GunungMertha2 from "@/public/XHMN3833.jpg";
import GunungMertha3 from "@/public/XHMN3840.jpg";
import GunungMertha4 from "@/public/XHMN3863.jpg";
import GunungMertha5 from "@/public/XHMN3878.jpg";
import GunungMertha6 from "@/public/XHMN3928.jpg";
import GunungMertha7 from "@/public/XHMN3947.jpg";

export default function page() {
  return (
    <main className="h-auto">
      <Navbar />
      <div className="container mx-auto px-5 py-24 lg:py-32">
        {/* <Timeline/> */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="left">
            <div className="ImageGunungMertha">
              <div class="grid gap-4">
                <div>
                  <Image
                    className="h-auto max-w-full rounded-lg"
                    src={GunungMertha5}
                    alt=""
                  />
                </div>
                <div class="grid grid-cols-5 gap-4">
                  <div>
                    <Image
                      className="h-auto max-w-full rounded-lg"
                      src={GunungMertha2}
                      alt=""
                    />
                  </div>
                  <div>
                    <Image
                      className="h-auto max-w-full rounded-lg"
                      src={GunungMertha3}
                      alt=""
                    />
                  </div>
                  <div>
                    <Image
                      className="h-auto max-w-full rounded-lg"
                      src={GunungMertha4}
                      alt=""
                    />
                  </div>
                  <div>
                    <Image
                      className="h-auto max-w-full rounded-lg"
                      src={GunungMertha6}
                      alt=""
                    />
                  </div>
                  <div>
                    <Image
                      className="h-auto max-w-full rounded-lg"
                      src={GunungMertha1}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right mt-5 lg:mt-0 lg:ps-10">
            <h2 className="text-3xl font-bold">Gunung Mertha</h2>
            <p className="badge badge-lg mt-3 badge-primary">
              Objek Pariwisata
            </p>

            <h2 className="text-xl font-semibold mt-5">The Story : </h2>
            <p className=" text-justify mt-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. A at
              reprehenderit non nam maxime, molestias dignissimos earum totam,
              dolorum et tenetur labore perspiciatis quas odit, hic vitae
              voluptates nisi aspernatur. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Voluptate, ab nobis, possimus
              ratione neque eaque voluptatum unde recusandae id minus similique
              nesciunt illum tempora aliquam voluptas necessitatibus enim magnam
              accusamus?
            </p>

            <p className="mt-3 text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
              reprehenderit alias itaque dicta cupiditate sed ipsa? Nemo nisi
              laboriosam corrupti aut, quisquam explicabo deleniti nesciunt
              laborum, dolores dolorum molestias vero? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Impedit animi praesentium
              libero blanditiis, suscipit odio ab, eligendi sequi quod odit
              corrupti nobis doloremque, beatae maiores ipsa quam. Natus, nobis
              aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis architecto officiis porro sint quae aperiam corporis
              deleniti quia laudantium debitis cupiditate dicta laboriosam quam,
              inventore dolorum ratione fugiat optio nam!
            </p>
          </div>
        </div>

        <section className="timeline mt-20">
          <ol class="relative border-s border-primary">
            {/* new line */}
            <li class="mb-10 ms-4">
              <div class="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -start-1.5 border border-primary"></div>
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 ">
                Januari 2018
              </time>
              <h3 class="text-lg font-semibold text-primary ">
                Lorem ipsum dolor sit
              </h3>
              <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                ratione, deleniti laboriosam facere asperiores culpa sed, fuga
                enim cupiditate, ducimus unde perspiciatis praesentium debitis
                obcaecati? Adipisci mollitia natus doloremque ratione?
              </p>
            </li>

            {/* new line */}
            <li class="mb-10 ms-4">
              <div class="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -start-1.5 border border-primary dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                March 2022
              </time>
              <h3 class="text-lg font-semibold text-primary ">
                Lorem ipsum dolor sit
              </h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti architecto, velit ipsum voluptatum molestias aspernatur
                in earum iusto consequatur maiores nobis magnam quo repudiandae
                vitae reiciendis mollitia ipsam obcaecati reprehenderit. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Numquam esse
                tenetur cum itaque quam amet, quas vero aliquam id nemo
                consectetur nihil quod reprehenderit repudiandae quae atque
                voluptatum odit. Obcaecati!
              </p>
            </li>

            {/* new line */}
            <li class="ms-4">
              <div class="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -start-1.5 border border-primary dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                April 2022
              </time>
              <h3 class="text-lg font-semibold text-primary ">
                Lorem ipsum dolor sit
              </h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
                vel omnis facilis amet, quisquam quaerat dignissimos pariatur
                rerum magnam veritatis fugiat ipsum sed quod. Facere illum
                facilis dicta eaque odio. Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Aut vero neque, ipsam, voluptatum
                quod quas modi repudiandae veniam tenetur laboriosam nostrum
                quisquam optio? At ut ea laudantium tenetur iure quisquam!
              </p>
            </li>
          </ol>
        </section>
      </div>
    </main>
  );
}
