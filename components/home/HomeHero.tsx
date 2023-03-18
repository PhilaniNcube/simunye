import Image from "next/image";
import Link from "next/link";
import { Fraunces } from "@next/font/google";

export const fraunces = Fraunces({
  weight: '800',
  subsets: ['latin']
})

const HomeHero = () => {
  return (
    <header className="h-[70vh] max-w-7xl mx-auto px-6 md:px-2 relative isolate">
      <Image
        width={1500}
        height={1000}
        className="object-cover object-left w-full h-full rounded-3xl lg:object-center"
        src="/images/herbs.jpg"
        alt="background"
      />
      <div className="absolute top-0 left-0 right-0 flex flex-col items-start justify-center h-full p-12 mx-auto max-w-7xl md:justify-end">
        <h1
          className={`text-3xl md:text-5xl lg:text-7xl text-white font-bold ${fraunces.className} `}
        >
          Harvesting nature's goodness, <br />one seed at a time.
        </h1>
        <p className="text-md md:text-lg lg:text-xl mt-3 text-slate-50 max-w-[50ch] leading-7">
          Experience the difference with our fresh, sustainably grown produce.
          From herbs to avocados to sweet potatoes, our organic farming
          practices ensure that you get the highest-quality, most flavorful
          products available.
        </p>
        <Link
          href="#herbs"
          className={`text-cream rounded-lg hidden tracking-wider bg-dark-cyan text-xl lg:text-2xl mt-3 font-medium px-8 py-2 cursor-pointer ${fraunces.className}`}
        >
          View our produce
        </Link>
      </div>
    </header>
  );
};
export default HomeHero;
