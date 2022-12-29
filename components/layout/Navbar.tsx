import Link from "next/link";
import {  Barlow } from "@next/font/google";

const barlow = Barlow({
  weight: '700',
  display: "swap",
  subsets: ['latin']
})

export const links = [
  {
    url: '/',
    text: "Home"
  },
  {
    url: '/about-us',
    text: "About Us"
  },
  {
    url: '/produce',
    text: "Our Produce"
  },
  {
    url: '/livestock',
    text: "Our Livestock"
  },
]

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

        <ul className="hidden lg:flex space-x-6 items-center">
          {links.map((item) => (
            <Link
            key={item.text}
              className={`${barlow.className} text-md uppercase text-grey`}
              href={item.url}
            >
              {item.text}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
