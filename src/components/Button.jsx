import React from "react";
import { motion } from "framer-motion";

export const PrimaryButton = ({
  text,
  type,
  children,
  customStyle,
  handleClick,
}) => {
  return (
    <>
      <motion.button
        whileTap={{ scale: 0.9 }}
        type={type}
        onClick={handleClick}
        className={`bg-custom-purple-700 rounded-2xl text-white font-medium 
        py-1.5 transition-all border-2 border-custom-purple-700
        hover:bg-custom-black-600 hover:text-gray-200 px-4 md:px-6 ${customStyle}`}
      >
        <div className="flex gap-2 justify-center">
          <p>{text}</p>
          <p className="my-auto">
            {children} {/* SVG icon */}
          </p>
        </div>
      </motion.button>
    </>
  );
};

export const SecondaryButton = ({ text, type, children }) => {
  return (
    <>
      <motion.button
        whileTap={{ scale: 0.9 }}
        type={type}
        className="bg-custom-white-100/90 rounded-2xl text-black font-medium px-6 py-1.5 transition-all hover:bg-custom-purple-700 hover:text-white"
      >
        <div className="flex gap-2">
          <p> {text}</p>
          <p className="my-auto">
            {children} {/* SVG icon */}
          </p>
        </div>
      </motion.button>
    </>
  );
};

export const OutlineButton = ({ text, type, children }) => {
  return (
    <>
      <motion.button
        whileTap={{ scale: 0.9 }}
        type={type}
        className="border border-custom-purple-700 rounded-2xl text-custom-white-100 px-6 py-1.5 transition-all bg-custom-black-900 hover:bg-custom-purple-900"
      >
        <div className="flex gap-2">
          <p> {text}</p>
          <p className="my-auto">
            {children} {/* SVG icon */}
          </p>
        </div>
      </motion.button>
    </>
  );
};

export const PrimaryButtonDash = ({
  text,
  type,
  children,
  customStyle,
  handleClick,
}) => {
  return (
    <>
      <motion.button
        whileTap={{ scale: 0.9 }}
        type={type}
        onClick={handleClick}
        className={`bg-purple-500 rounded-lg text-white font-medium 
        py-1 transition-all border-2 border-custom-purple-700
        hover:bg-purple-700 hover:text-white px-4 ${customStyle}`}
      >
        <div className="flex gap-2 justify-center">
          <p className="my-auto">
            {children} {/* SVG icon */}
          </p>
          <p>{text}</p>
        </div>
      </motion.button>
    </>
  );
};
