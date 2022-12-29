import Image from "next/image";
import React from "react";
import { fraunces } from "../home/HomeHero";

export default function AboutHero() {
  return (
    <div className="py-12 2xl:px-20 px-6 xl:mx-auto xl:container overflow-y-hidden">
      <div className="flex  sm:flex-row flex-col items-center justify-between">
        <div className="sm:w-2/5 md:w-1/4 lg:w-1/3">
          <h1
            className={`lg:text-5xl text-2xl font-bold text-gray-800 ${fraunces.className}`}
          >
            About Us
          </h1>
          <p className="text-lg leading-6 text-gray-600 mt-4 ">
            We are a family-run farm, with the owners and key staff members all
            working together to ensure that every aspect of our operations is
            running smoothly. We take great pride in our work and are dedicated
            to providing our customers with the best products and service
            possible.
          </p>
          <button className="mt-12 text-lg uppercase font-medium leading-none text-white bg-grey-blue rounded sm:p-4 p-6 sm:w-auto w-full focus:outline-none hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700">
            Contact Us
          </button>
        </div>
        <div className="sm:w-1/2 w-11/12 py-10 sm:mt-0 mt-14 sm:ml-0 ml-7  bg-grey-blue rounded-3xl">
          <Image
            width={1920}
            height={1280}
            src="/images/germinating.jpg"
            alt="Germinating"
            className="w-full aspect-video object-cover md:-ml-28 -ml-7 rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}
