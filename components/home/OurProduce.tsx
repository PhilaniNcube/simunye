import { Fraunces } from "@next/font/google";
import Image from "next/image";
import { Barlow } from "@next/font/google";

const barlow = Barlow({
  weight: "700",
  display: "swap",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  weight: '800',
  subsets: ['latin']
})

const OurProduce = () => {

const collection = [
  {
    name: 'Sweet Potato',
    image: '/images/sweet_potato.jpg',
  },
  {
    name: 'Sweet Potato Seedlings',
    image: '/images/seedlings.jpg'
  },
  {
    name: 'Vegetables',
    image: '/images/vegetables.jpg'
  },
  {
    name: 'Herbs',
    image: '/images/organic_herbs.jpg'
  }
]

  return (
    <section className="max-w-7xl mx-auto px-4 mt-4 relative isolate">
      <div className="absolute inset-0">
        <h1
          className={`${fraunces.className}  bg-clip-text text-transparent bg-gradient-to-b from-gray-500 to-slate-100 text-center text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[6rem] xl:text-[8rem] font-bold tracking-widest`}
        >
          Our Products
        </h1>
      </div>
      <div className="w-full grid grid-cols-2 pt-24 md:grid-cols-4 z-10 gap-6">
        {collection.map((item) => (
          <div key={item.name} className="w-full">
            <Image
              src={item.image}
              width={500}
              height={500}
              alt={item.name}
              className="w-full rounded-full object-cover"
            />
            <p className={`${fraunces.className} text-base md:text-lg lg:text-2xl mt-2 text-slate-700 font-medium text-center`}>{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default OurProduce;
