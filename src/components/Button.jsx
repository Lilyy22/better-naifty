// import { MotionConfig } from "framer-motion/dist/cjs";
import React from "react";
import { motion } from "framer-motion";

export const PrimaryButton = ({
  text,
  type,
  children,
  customStyle,
  handleClick,
  isDisabled,
}) => {
  return (
    <>
      <motion.button
        className={`bg-purple-700/80 rounded text-white font-medium 
        py-2 transition-all hover:bg-custom-black-600 px-4 md:px-6 ${customStyle}`}
        whileTap={{ scale: 0.9 }}
        onClick={handleClick}
        type={type}
        disabled={isDisabled}
      >
        <div className="flex gap-2 justify-cente text-xs">
          <p>{text}</p>
          <p className="my-auto">
            {children} {/* SVG icon */}
          </p>
        </div>
      </motion.button>
    </>
  );
};

export const SecondaryButton = ({ text, type, children, handleClick }) => {
  return (
    <>
      <motion.button
        whileTap={{ scale: 0.9 }}
        type={type}
        className="bg-gray-200 px-3 py-2 !font-medium rounded flex gap-2 mb-auto text-sm"
        onClick={handleClick}
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
        className="border border-custom-purple-700 rounded-2xl text-custom-white-100 px-6 py-1.5 transition-all bg-custom-gray-900 hover:bg-custom-purple-900"
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

export const LandPrimaryButton = ({
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
