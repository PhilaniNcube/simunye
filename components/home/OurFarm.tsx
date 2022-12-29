import Image from "next/image";
import { fraunces } from "./HomeHero";

const OurFarm = () => (
  <div className="bg-gray-200 mt-6 overflow-y-hidden">
    <div className="2xl:mx-auto 2xl:container flex justify-center items-center px-4 md:px-6 xl:px-20 py-12">
      <div className="flex justify-center items-center">
        <div
          aria-label="card"
          className="focus:outline-none flex sm:flex-row flex-col justify-center items-center"
        >
          <div className="lg:w-2/5 w-full">
            <Image
              className="focus:outline-none aspect-square rounded-3xl object-cover w-full"
              role="img"
              width={1920}
              height={1280}
              src="/images/field.jpg"
              alt="pineapple"
            />
          </div>
          <div className="lg:w-2/5 xl:w-2/5  w-full lg:pl-0 sm:pl-4">
            <div className="lg:pl-8 py-8 lg:py-2 text-color">
              <h2
                className={`lg:w-full 2xl:w-9/12 focus:outline-none text-2xl md:text-3xl lg:text-4xl text-gray-900 leading-6 md:leading-snug f-f-l font-extrabold ${fraunces.className}`}
              >
                Welcome to our farm, located on the outskirts of Harare!
              </h2>
              <h2 className="focus:outline-none sm:text-base text-sm md:text-lg leading-5 md:leading-6 lg:leading-7 text-grey-blue font-medium py-4 lg:py-6">
                At our farm, we specialize in a variety of herbs, including
                chamomile, lavender, lemon grass, rosemary, yarrow, garden rue,
                garlic, and stinging nettle. We also produce Haas avocado
                seedlings, lemon and citrus tree seedlings, and a range of
                produce including cabbage, tomatoes, chillies, sweet potatoes,
                and sweet potato vines. All of our products are grown using
                organic farming practices, ensuring that they are healthy and
                sustainable.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default OurFarm;
