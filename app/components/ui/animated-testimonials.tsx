"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState, useCallback } from "react";

type Testimonial = {
  id: number;
  quote: string;
  name: string;
  designation: string;
  src: StaticImageData;
  category: string;
  techStack: string[];
};

const seededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    setActive(0);
  }, [testimonials]);

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = useCallback(() => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  const isActive = (index: number) => index === active;

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, handleNext]);

  const randomRotateY = (id: number) => {
    return Math.floor(seededRandom(id) * 21) - 10; // -10 to 10 degrees
  };

  if (testimonials.length === 0) {
    return null;
  }

  const activeTestimonial = testimonials[active] ?? testimonials[0];

  return (
    <div className="mx-auto max-w-sm px-4 py-5 font-serif antialiased md:max-w-4xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
        <div>
          <div className="relative h-80 w-full overflow-hidden rounded-3xl border border-gray-200 bg-lightHover/30 shadow-[6px_6px_0_#000]">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{
                    opacity: 0,
                    scale: 0.94,
                    y: 18,
                    rotate: randomRotateY(testimonial.id),
                    filter: "blur(4px)",
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0,
                    scale: isActive(index) ? 1 : 0.96,
                    y: isActive(index) ? 0 : 18,
                    rotate: isActive(index) ? 0 : randomRotateY(testimonial.id),
                    zIndex: isActive(index) ? 40 : testimonials.length + 2 - index,
                    filter: isActive(index) ? "blur(0px)" : "blur(4px)",
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.94,
                    y: -18,
                    rotate: randomRotateY(testimonial.id),
                    filter: "blur(4px)",
                  }}
                  transition={{
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-4xl font-bold text-black">
              {activeTestimonial.name}
            </h3>
            <p className="text-sm text-gray-700">
              {activeTestimonial.designation}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-md border border-darkHover/30 bg-lightHover px-3 py-1 text-xs font-semibold text-darkHover">
                {activeTestimonial.category}
              </span>
              {activeTestimonial.techStack.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-gray-300 bg-white px-3 py-1 text-xs font-medium text-gray-700"
                >
                  {item}
                </span>
              ))}
            </div>
            <motion.p className="mt-8 text-lg text-gray-500">
              {activeTestimonial.quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                  animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                  transition={{ duration: 0.28, ease: "easeOut", delay: 0.018 * index }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex gap-4 pt-12 md:pt-0 lg:py-5">
            <button
              onClick={handlePrev}
              className="group/button flex h-8 w-8 items-center justify-center rounded-full border border-gray-400 bg-white transition duration-300 hover:-translate-y-0.5 hover:border-darkHover hover:bg-lightHover"
              aria-label="Previous testimonial"
            >
              <IconArrowLeft className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-black" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-8 w-8 items-center justify-center rounded-full border border-gray-400 bg-white transition duration-300 hover:-translate-y-0.5 hover:border-darkHover hover:bg-lightHover"
              aria-label="Next testimonial"
            >
              <IconArrowRight className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-black" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
