import Link from "next/link";
import React, { useState } from "react";
import {  Barlow } from "@next/font/google";
import Image from "next/image";

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



export default function Navbar() {
  const [searchInput, setSearchInput] = useState(true);
  const [mdOptionsToggle, setMdOptionsToggle] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="">
      <div>
        <div className="relative">
          {/* For md screen size */}

          {/* For md screen size */}
          {/* For large screens */}
          <div className=" w-full  px-6 py-9">
            <div className="max-w-7xl mx-auto flex items-center w-full justify-between">
              <Image
                src="/images/logo.png"
                width={576}
                height={301}
                alt="Logo"
                className="w-36 object-cover"
              />
              <ul className="hidden  md:flex items-center justify-center space-x-8">
                {links.map((link) => (
                  <Link
                    key={link.text}
                    href={link.url}
                    className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                  >
                    {link.text}
                  </Link>
                ))}
              </ul>

              {!showMenu && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 md:hidden"
                  onClick={() => setShowMenu(true)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                  />
                </svg>
              )}
            </div>
          </div>
          {/* For small screen */}
          <div
            id="mobile-menu"
            className={`${
              showMenu ? "flex" : "hidden"
            } absolute dark:bg-gray-900 z-10 inset-0 md:hidden bg-white flex-col h-screen w-full`}
          >
            <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-4 p-4">
              <div className="flex items-center space-x-3"></div>
              <button
                onClick={() => setShowMenu(false)}
                aria-label="close menu"
                className="focus:outline-none focus:ring-2 rounded focus:ring-gray-600"
              >
                <svg
                  className="fill-stroke text-gray-800 dark:text-white"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 4L4 12"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 4L12 12"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 p-4">
              <ul className="flex flex-col space-y-6">
                {links.map((item) => (
                  <Link
                    key={item.text}
                    href={item.url}
                    onClick={() => setShowMenu(false)}
                    className="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800"
                  >
                    {item.text}
                    <div>
                      <svg
                        className="fill-stroke text-black dark:text-white"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.5 3L7.5 6L4.5 9"
                          stroke="currentColor"
                          strokeWidth="0.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

