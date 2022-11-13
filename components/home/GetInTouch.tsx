import { Barlow, Fraunces } from "@next/font/google";

const barlow = Barlow({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  weight: "800",
  subsets: ["latin"],
});

const GetInTouch = () => {
  return (
    <div className={`px-4 ${barlow.className} my-10`}>
      <section className="max-w-7xl mx-auto mt-8 bg-dark-cyan rounded-2xl p-8">
        <h2
          className={`${fraunces.className} text-cream font-bold text-2xl md:text-4xl`}
        >
          Get In Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
          <div className="w-full">
            <h3 className={`${fraunces.className} text-md text-cream`}>
              Tel:{" "}
              <span className={`${barlow.className}`}>+263 71 311 0810</span>
            </h3>
          </div>
          <div className="w-full">
            <h3 className={`${fraunces.className} text-md text-cream`}>
              Tel:{" "}
              <span className={`${barlow.className}`}>+263 77 296 4425</span>
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
};
export default GetInTouch;
