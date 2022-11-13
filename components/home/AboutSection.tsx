import Image from "next/future/image";
import Link from "next/link";

const AboutSection = () => {
  return (
    <header className="h-screen relative">
      <Image
        width={1500}
        height={1000}
        className="w-full h-full object-cover opacity-30"
        src="/images/plants.jpg"
        alt="background"
      />
      <div className="h-screen absolute px-4 top-0 left-0 right-0 flex max-w-7xl mx-auto flex-col justify-center items-center">
        <h2 className="text-2xl md:text-3xl text-slate-800 font-bold">
          About Us
        </h2>
        <p className="text-md md:text-lg  mt-3 text-slate-800 max-w-[60ch]">
          With 20 hectares of arable, we produce a variety of crops. We
          specialize in the production of herbs and other horticulture crops.
          From everyday fresh vegetables or herbs to brin more flavour to your
          cooking. Some of the herbs we produce are also known to have some
          medicinal properties.
        </p>
        <p className="text-md md:text-lg  mt-3 text-slate-800 max-w-[60ch]">
          We also reaise free range chickens, goats, sheep and rabbits. These
          are great sources of protein to complement the other crops produced on
          the farm.
        </p>

        <Link href="/contact" passHref>
          <button className="bg-yellow-300 text-slate-900 text-lg mt-3 font-medium px-8 py-2 rounded-full uppercase cursor-pointer">
            Explore more
          </button>
        </Link>
      </div>
    </header>
  );
};
export default AboutSection;
