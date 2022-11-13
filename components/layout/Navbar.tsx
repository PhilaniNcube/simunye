import Link from "next/link";
import {  Barlow } from "@next/font/google";

const barlow = Barlow({
  weight: '700',
  display: "swap",
  subsets: ['latin']
})

const Navbar = () => {
  return (
    <nav className={`bg-transparent py-4 px-4 ${barlow.className}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="cursor-pointer">
          <img
            src="/images/logo.png"
            className="w-36 object-cover"
            alt="logo"
          />
        </Link>

        <ul className="hidden  space-x-6 items-center">
          <li className="text-md uppercase text-grey">
            <Link className={barlow.className} href="/">
              Home
            </Link>
          </li>
          <li className="text-md uppercase text-grey">
            <Link className={barlow.className} href="/about">
              About Us
            </Link>
          </li>
          <li className="text-md uppercase text-grey">
            <Link className={barlow.className} href="/produce">
              Our Produce
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
