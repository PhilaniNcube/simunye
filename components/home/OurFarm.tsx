import Image from "next/image";
import { fraunces } from "./HomeHero";

const OurFarm = () => (
  <div className="mt-6 overflow-y-hidden ">
    <div className="flex items-center justify-center px-4 py-12 2xl:mx-auto 2xl:container md:px-6 xl:px-20">
      <div className="flex items-center justify-center">
        <div
          aria-label="card"
          className="flex flex-col items-center justify-center focus:outline-none sm:flex-row"
        >
          <div className="w-full lg:w-2/5">
            <Image
              className="object-cover w-full focus:outline-none aspect-square rounded-3xl"
              role="img"
              width={1920}
              height={1280}
              src="/images/field.jpg"
              alt="pineapple"
            />
          </div>
          <div className="w-full lg:w-2/5 xl:w-2/5 lg:pl-0 sm:pl-4">
            <div className="py-8 lg:pl-8 lg:py-2 text-color">
              <h2
                className={`lg:w-full 2xl:w-9/12 focus:outline-none text-2xl md:text-3xl lg:text-4xl text-gray-900 leading-6 md:leading-snug f-f-l font-extrabold ${fraunces.className}`}
              >
                Welcome to our farm, located on the outskirts of Harare!
              </h2>
              <h2 className="py-4 text-sm font-medium leading-5 focus:outline-none sm:text-base md:text-lg md:leading-6 lg:leading-7 text-grey-blue lg:py-6">
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
