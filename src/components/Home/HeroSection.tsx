"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
const HeroSection = () => {
  const router = useRouter();
  return (
    <section className="h-screen mx-auto max-w-screen-xl pb-4 px-4 flex flex-col justify-center items-center lg:flex-row">
      <motion.div
        className="text-center lg:text-left lg:w-1/2"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h1 className="text-gray-800 font-bold text-4xl xl:text-5xl">
          Optimize your website for{" "}
          <span className="text-purple-600">Every screen</span>
        </h1>
        <p className="text-gray-500 max-w-md  leading-relaxed mt-4">
          At Pixel Perfect, we redefine precision. From websites to graphics,
          every pixel matters. Let&#39;s transform your vision into pixel-perfect
          reality.
        </p>
          <motion.button
            type="submit"
            className="outline-none bg-gray-700 mt-4 text-white text-center px-4 py-3 rounded-md shadow ring-offset-2 ring-gray-700 focus:ring-2 sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/screens")}
          >
            Get started
          </motion.button>
      </motion.div>
      <motion.div
        className="w-full lg:w-1/2 mt-8 lg:mt-0"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
      >
        <Image
          width={1560}
          height={1080}
          src="https://cdn.dribbble.com/userupload/11216375/file/original-359cb13e6072f14cde2314bdb53fed65.gif"
          className="w-full mx-auto sm:w-10/12 lg:w-full"
          alt="Website simulation on different devices"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
