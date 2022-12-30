import Image from "next/image";
import React from "react";
import { fraunces } from "../home/HomeHero";

export default function LivestockBanner() {
  return (
    <div>
      <div className="2xl:mx-auto 2xl:container 2xl:p-20 md:p-10 p-8 ">
        <div>
          <Image
            src="/images/goats_banner.jpg"
            alt="Livestock"
            width={1920}
            height={1280}
            className="w-full md:block hidden aspect-video object-cover"
          />
          <Image
            src="/images/goats_banner.jpg"
            alt="Livestock"
            width={1920}
            height={1280}
            className="w-full h-80 object-cover object-center md:hidden"
          />
        </div>
        <div className="lg:px-28 md:px-20 lg:-mt-40 sm:-mt-28 -mt-28 relative z-30">
          <div className="bg-white shadow-md rounded-md py-16 2xl:px-28 md:px-12 px-4 flex flex-col items-center justify-center">
            <h1
              className={`lg:text-5xl text-3xl font-bold text-gray-800 text-center ${fraunces.className}`}
            >
              Our Livestock
            </h1>
            <p className="text-base leading-6 text-center text-gray-600 md:w-10/12 w-full mt-6">
              At our farm, we raise goats and pigs for pork. Our goats are a
              hardy and adaptable breed, well-suited to our region's climate and
              conditions. They are raised with care and attention, and we ensure
              that they have plenty of space to roam and graze.
            </p>
            <p className="text-base leading-6 text-center text-gray-600 md:w-10/12 w-full mt-6">
              Our pigs are also raised with care, and we take great pride in
              producing high-quality pork products. We use traditional farming
              methods to raise our pigs, ensuring that they are treated with
              respect and allowed to grow at a natural pace.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}
