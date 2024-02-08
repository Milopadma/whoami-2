// src/Projects.tsx

import React from "react";
import Separator from "./components/separator";
import { motion } from "framer-motion";

const Projects: React.FC = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-between">
      <div className="pt-medium grid grid-cols-12 bg-white">
        <motion.div
          className="col-span-3 col-start-3 md:col-span-1 md:col-start-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 100 }} // end at the normal position
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <a
            className="text-2xl text-gray-300 transition-all duration-200 ease-in-out hover:text-gray-800"
            href="/"
          >
            back
          </a>
        </motion.div>
        <motion.div
          className="col-span-3 col-start-3"
          initial={{ x: -350 }}
          animate={{ x: 0 }}
        >
          <h1 className="text-2xl">projects</h1>
        </motion.div>
        <div className="col-span-5 col-start-7 md:col-span-3 md:col-start-7">
          <h1 className="text-2xl leading-6">
            a software engineer from bali interested in impacting lives around
            him
          </h1>
        </div>
        <Separator size="xxlarge" />
        <div className="col-span-3 col-start-3 break-words">
          <h1 className="text-2xl leading-6">www.milopadma.com</h1>
        </div>
      </div>
    </div>
  );
};

export default Projects;
