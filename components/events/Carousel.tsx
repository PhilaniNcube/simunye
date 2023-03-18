import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
//@ts-expect-error
import useKeypress from "react-use-keypress";

const slides = [
  {
    image: "/images/field_1.jpg",
    title: "",
  },
  {
    image: "/images/field_64.jpg",
    title: "",
  },
  {
    image: "/images/field_30.jpg",
    title: "",
  },
  {
    image: "/images/field_31.jpg",
    title: "",
  },
  {
    image: "/images/field_32.jpg",
    title: "",
  },
  {
    image: "/images/field_33.jpg",
    title: "",
  },
  {
    image: "/images/field_34.jpg",
    title: "",
  },
];

let collapsedAspectRatio = '1/3';
let fullAspectRatio = '3/ 2';
let margin = 10;
let gap = 2;

const Carousel = () => {
  let [index, setIndex] = useState(0);

  useKeypress("ArrowRight", () => {
    if (index < slides.length - 1) {
      setIndex(index + 1);
    }
  });

  useKeypress("ArrowLeft", () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  });

  return (
    <MotionConfig transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1] }}>
      <div className="h-fit">
        <div className="mx-auto flex min-h-[40vh] max-h-[80vh] max-w-7xl flex-col justify-center">
          <div className="relative overflow-hidden">
            <motion.div animate={{ x: `-${index * 100}%` }} className="flex ">
              {slides.map((slide) => (
                <Image
                  key={slide.title}
                  src={slide.image}
                  alt="Image"
                  width={1920}
                  height={1280}
                  className="object-cover w-full h-full aspect-video rounded-xl"
                />
              ))}
            </motion.div>
            <AnimatePresence initial={false}>
              {index > 0 && (
                <motion.button
                  initial={{ opacity: 0 }}
                  exit={{ opacity: 0, pointerEvents: "none" }}
                  animate={{ opacity: 0.7 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute flex items-center justify-center w-8 h-8 -mt-4 bg-white rounded-full left-2 top-1/2"
                  onClick={() => setIndex(index - 1)}
                >
                  <ChevronLeftIcon className="w-6 h-6" />
                </motion.button>
              )}
            </AnimatePresence>
            <AnimatePresence initial={false}>
              {index + 1 < slides.length && (
                <motion.button
                  initial={{ opacity: 0 }}
                  exit={{ opacity: 0, pointerEvents: "none" }}
                  animate={{ opacity: 0.7 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute flex items-center justify-center w-8 h-8 -mt-4 bg-white rounded-full right-2 top-1/2"
                  onClick={() => setIndex(index + 1)}
                >
                  <ChevronRightIcon className="w-6 h-6" />
                </motion.button>
              )}
            </AnimatePresence>
          </div>

          <div className="absolute inset-x-0 justify-center hidden overflow-hidden lg:flex h-14 bottom-6">
            <motion.div
              initial={false}
              animate={{
                x: `-${
                  index * 100 * (33 / 150) +
                  margin +
                  index * gap
                }%`,
              }}
              style={{ aspectRatio: fullAspectRatio, gap: `${gap}%` }}
              className="flex"
            >
              {slides.map((image, i) => (
                <motion.button
                  initial={false}
                  key={i}
                  whileHover={{ opacity: 1 }}
                  onClick={() => setIndex(i)}
                  variants={{
                    active: {
                      aspectRatio: fullAspectRatio,
                      marginLeft: `${margin}%`,
                      marginRight: `${margin}%`,
                      opacity: 1,
                    },
                    inactive: {
                      aspectRatio: collapsedAspectRatio,
                      marginLeft: 0,
                      marginRight: 0,
                      opacity: 0.5,
                    },
                  }}
                  animate={i === index ? "active" : "inactive"}
                  className={`shrink-0`}
                >
                  <Image
                    src={image.image}
                    alt="Image"
                    width={1920}
                    height={1280}
                    className="object-cover h-full"
                  />
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </MotionConfig>
  );
};

export default Carousel;
