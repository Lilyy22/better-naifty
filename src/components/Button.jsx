// import { MotionConfig } from "framer-motion/dist/cjs";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
        py-2 transition-all hover:bg-custom-black-600 px-4 md:px-6 ${
          isDisabled ? "cursor-not-allowed " : ""
        } ${customStyle}`}
        whileTap={{ scale: 0.9 }}
        onClick={handleClick}
        type={type}
        disabled={isDisabled}
      >
        <div className="flex gap-2 justify-center text-xs">
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
        className="bg-gray-200 px-3 py-2 !font-medium rounded flex gap-2 mb-auto text-sm hover:bg-gray-300/95"
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

export const OutlineButton = ({ text, goto, children }) => {
  return (
    <>
      <Link
        whileTap={{ scale: 0.9 }}
        to={goto}
        className="border border-custom-purple-700 rounded-2xl text-custom-white-100 px-6 py-1.5 transition-all bg-custom-gray-900 hover:bg-custom-purple-900 inline-block whitespace-nowrap"
      >
        <div className="flex gap-2">
          <p> {text}</p>
          <p className="my-auto">
            {children} {/* SVG icon */}
          </p>
        </div>
      </Link>
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
export const LandSecondaryButton = ({
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
        className={`bg-gray-700 rounded-2xl text-white font-medium 
        py-1.5 transition-all border-2 border-gray-700
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

export const GoBack = ({ pathname, text, handleClick }) => {
  return (
    <Link
      to={pathname}
      onClick={handleClick}
      className="flex my-2 text-blue-600 hover:text-blue-500"
    >
      <svg
        className="w-3 h-3 fill-current my-auto"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
      >
        <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
      </svg>
      <span className="text-sm whitespace-nowrap">{text}</span>
    </Link>
  );
};
