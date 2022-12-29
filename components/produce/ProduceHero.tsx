import React, { useState } from "react";
import { fraunces } from "../home/HomeHero";

function ProduceHero() {


  return (
    <div style={{ height: "800px" }}>
      <div className="relative h-full">
        <img
          src="/images/spread.jpg"
          alt="background img"
          className="absolute inset-0 object-cover h-full w-full"
        />

        <div className="absolute flex w-full bg-transparent bottom-0">
          <div className="xl:container xl:px-0 md:px-10 sm:px-5 px-4 mx-auto">
            <div className="flex flex-col rounded-t-2xl bg-gradient-to-b from-gray-700 to-gray-900 lg:w-1/2 md:w-8/12 sm:w-10/12 w-full 2xl:py-40 sm:py-20 py-10 2xl:px-24 sm:px-12 px-7">
              <h1
                className={`md:text-4xl text-2xl 2xl:text-5xl font-medium mb-3 leading-10 text-white ${fraunces.className}`}
              >
                A wide range of high-quality, organic produce
              </h1>
              <p className="text-xs sm:text-base leading-normal text-white mt-3">
                Our chamomile and lavender are great for relaxing teas, while
                our lemon grass and rosemary add flavor and aroma to a variety
                of dishes. Our yarrow, garden rue, and garlic are also highly
                sought after for their unique flavors and health benefits.
              </p>
              <p className="text-xs sm:text-base leading-normal text-white mt-3">
                In addition to our herbs, we also offer Haas avocado seedlings,
                lemon and citrus tree seedlings, and a range of other produce
                including cabbage, tomatoes, chillies, sweet potatoes, and sweet
                potato vines. All of our produce is grown with care and
                attention to detail, ensuring that it is healthy and delicious.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProduceHero;
