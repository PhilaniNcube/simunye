import Image from "next/image";
import Link from "next/link";
import { Fraunces } from "@next/font/google";

const fraunces = Fraunces({
  weight: '800',
  subsets: ['latin']
})

const HomeHero = () => {
  return (
    <header className="h-[70vh] max-w-7xl mx-auto px-6 md:px-4 relative isolate">
      <Image
        width={1500}
        height={1000}
        className="w-full rounded-3xl h-full object-cover object-left lg:object-center"
        src="/images/herbs.jpg"
        alt="background"
      />
      <div className="h-full absolute p-12  top-0 left-0 right-0 flex max-w-7xl mx-auto flex-col justify-center md:justify-end items-start">
        <h1
          className={`text-3xl md:text-5xl lg:text-7xl text-white font-bold ${fraunces.className} `}
        >
          Fresh & Organic <br /> Produce
        </h1>
        <p className="text-md md:text-lg lg:text-xl mt-3 text-slate-50 max-w-[30ch] leading-7">
          From the farm to the plate. We provide quality produce, in a
          sustainable manner.
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
