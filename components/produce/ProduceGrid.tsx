import Image from "next/image";
import { fraunces } from "../home/HomeHero";

export default function ProduceGrid() {
  return (
    <div className="overflow-y-hidden">
      <div className="py-12 2xl:container 2xl:mx-auto flex flex-col justify-center items-center px-4 md:px-6 xl:px-20">
        <h1
          className={`text-xl md:text-2xl xl:text-4xl font-medium leading-5 md:leading-6 xl:leading-9 text-gray-800 ${fraunces.className}`}
        >
          Featured Produce
        </h1>
        <div className="flex justify-center md:flex-row flex-col xl:space-x-8 md:space-x-6 space-y-6 md:space-y-0 items-stretch mt-6 xl:mt-12">
          <div className="flex justify-between items-center flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-6">
            <div className="flex flex-col justify-center items-center space-y-5">
              <Image
                width={1920}
                height={1280}
                src="/images/lemon_tree.jpg"
                alt="Lemon Tree Seedlings"
                className="w-full aspect-video object-cover rounded-xl"
              />
              <div className="md:h-4 md:space-x-4 flex justify-start md:flex-row flex-col space-y-3 md:space-y-0 md:justify-between items-start md:items-center w-full">
                <p className="text-base font-medium  lg:text-xl leading-5 xl:leading-none text-gray-800">
                  Lemon Tree Seedlings
                </p>
                <p className="text-base xl:text-xl leading-none xl:leading-5 text-gray-600">
                  $3.00 - $5.00
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center space-y-5">
              <Image
                width={1920}
                height={1280}
                src="/images/organic_vegetables.jpg"
                alt="Organic Vegetables"
                className="w-full aspect-video object-cover rounded-xl"
              />
              <div className="md:h-4 md:space-x-4 flex justify-start md:flex-row flex-col space-y-3 md:space-y-0 md:justify-between items-start md:items-center w-full">
                <p className="text-base font-medium lg:text-xl leading-5 xl:leading-none text-gray-800">
                  Assorted Vegetables
                </p>
                <p className="text-base xl:text-xl leading-none xl:leading-5 text-gray-600"></p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex w-full md:w-auto  flex-col justify-center items-center space-y-5">
              <Image
                className="h-96 w-full md:w-auto object-cover md:h-auto rounded-xl"
                src="/images/haas_avocado.jpg"
                width={1920}
                height={2880}
                alt="Haas Avocado"
              />
              <div className="md:h-4 md:space-x-4 flex  justify-start md:flex-row flex-col space-y-3 md:space-y-0 md:justify-between items-start md:items-center w-full">
                <p className="text-base font-medium lg:text-xl leading-5 xl:leading-none text-gray-800">
                  Haas Avocado Seedlings{" "}
                </p>
                <p className="text-base xl:text-xl leading-none xl:leading-5 text-gray-600">
                  $5.00 - $8.00
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-6">
            <div className="flex flex-col justify-center items-center space-y-5">
              <Image
                width={1920}
                height={1280}
                src="/images/sweet-potatoes.jpg"
                alt="Organic Vegetables"
                className="w-full aspect-video object-cover rounded-xl"
              />
              <div className="md:h-4 md:space-x-4 h-10 flex justify-start md:flex-row flex-col space-y-3 md:space-y-0 md:justify-between items-start md:items-center w-full">
                <p className="text-base font-medium lg:text-xl  leading-5 xl:leading-none text-gray-800">
                  Sweet Potatoes
                </p>
                <p className="text-base xl:text-xl leading-none xl:leading-5 text-gray-600"></p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center space-y-5">
              <Image
                width={1920}
                height={1440}
                src="/images/covo.jpg"
                alt="Green Vegetables"
                className="w-full aspect-video object-cover rounded-xl"
              />
              <div className="md:h-4 md:space-x-4 h-10 flex justify-start md:flex-row flex-col space-y-3 md:space-y-0 md:justify-between items-start md:items-center w-full">
                <p className="text-base lg:text-xl font-medium leading-5 md:leading-5 xl:leading-none text-gray-800">
                  Covo
                </p>
                <p className="text-base xl:text-xl leading-none xl:leading-5 text-gray-600"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
