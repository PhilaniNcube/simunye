import React from "react";
import { fraunces } from "../home/HomeHero";

const Story = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="lg:w-10/12 w-full">
        <h2
          className={`xl:w-8/12 lg:w-10/12 w-full font-bold text-grey-blue lg:text-4xl text-3xl lg:leading-10 leading-9 mt-2 ${fraunces.className}`}
        >
          We are here to make great design accessible and delightfull for
          everyone
        </h2>
        <p className="font-normal text-lg leading-6 text-grey-blue mt-6">
          Our farm was founded about 20 years ago with a passion for growing
          healthy, sustainable produce using organic farming practices. Our
          mission is to provide our customers with the freshest, highest-quality
          produce and livestock products possible.
        </p>
      </div>

      <div className="lg:mt-14 sm:mt-10 mt-12">
        <img
          className="lg:block hidden w-full aspect-[9/3] object-cover rounded-lg"
          src="/images/cabbage.jpg"
          alt="Group of people Chilling"
        />
        <img
          className="lg:hidden sm:block hidden w-full aspect-[6/3] object-cover rounded-lg"
          src="/images/cabbage.jpg"
          alt="Group of people Chilling"
        />
        <img
          className="sm:hidden block w-full aspect-square object-cover rounded-lg"
          src="/images/cabbage.jpg"
          alt="Group of people Chilling"
        />
      </div>

      <div className="lg:mt-16 sm:mt-12 mt-16 flex lg:flex-row justify-between flex-col lg:gap-8 gap-12">
        <div className="w-full xl:w-5/12 lg:w-6/12">
          <h2
            className={`font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 ${fraunces.className}`}
          >
            Our Story
          </h2>
          <p className="font-normal text-base leading-6 text-gray-600 mt-4">
            Over our history we have worked with many organisations in order to
            produce high quality produce using the best methods around. We will
            also be offering training on organic farming practices in the future
            in order to pass on what we have learnt.
          </p>
          <p className="font-normal text-base leading-6 text-gray-600 mt-6">
            We aim to provide the best service to all our customers by ensuring
            delivery of the produce they require in the best possible quality
            and or freshness. We take great care in raising our livestock,
            ensuring that they are well-cared for and treated with respect. From
            our herbs, we also produce a range of blended teas, each with its
            own unique flavor and benefits.
          </p>
        </div>
        <div className="lg:flex items-center w-full lg:w-1/2 ">
          <img
            className="lg:block hidden w-full object-cover rounded-xl aspect-video"
            src="/images/goats.jpg"
            alt="goats"
          />
          <img
            className="lg:hidden sm:block hidden w-full h-3/4 object-cover rounded-xl"
            src="/images/goats.jpg"
            alt="goats"
          />
          <img
            className="sm:hidden block w-full object-cover rounded-xl aspect-square"
            src="/images/goats.jpg"
            alt="goats"
          />
        </div>
      </div>
    </div>
  );
};

export default Story;
