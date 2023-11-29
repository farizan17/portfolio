import React from "react";
import { motion } from "framer-motion";

function Intro() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="main relative pt-28 mx-auto justify-between gap-6 flex flex-row items-center"
    >
      <div className="flex flex-col border-gray-700 flex-1">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.3,
            type: "spring",
          }}
          className="flex overflow-hidden items-center font-bold text-4xl sm:text-5xl from-blue-300 via-indigo-400 to-purple-500 bg-clip-text"
        >
          {`Hi, I'm Farizan`}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.4,
            type: "spring",
          }}
          className="flex items-center space-x-2 my-2"
        >
          <div className="px-3 py-1 rounded-md bg-red-200 bg-opacity-40 text-xs">
            Developer Student
          </div>
          <div className="px-3 py-1 rounded-md bg-blue-200 bg-opacity-40 text-xs">
            Art Enthusiast
          </div>
          <div className="px-3 py-1 rounded-md bg-purple-200 bg-opacity-40 text-xs">
            Gamer
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
            type: "spring",
          }}
          className="text-gray-700 font-normal"
        >
          <p className=" mt-2 leading-relaxed md:w-4/5">
            {`Welcome to my gallery! I am a Developer Student based in
              Indonesia. I really like holidays and playing games. `}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
            type: "spring",
          }}
          className="flex flex-col mt-4"
        >
          <h1 className="font-bold">Contact me</h1>
          <p>muhammadfarizankholis@gmail.com</p>
        </motion.div>
      </div>
      <img
        className="w-32 h-32 rounded-full object-cover bg-black "
        src="/ican.jpg"
      />
      <div className="flex items-center"></div>
    </motion.div>
  );
}

export default Intro;
