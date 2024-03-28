import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Logo = ({ customStyle, noLink }) => {
  return (
    <>
      <Link to={noLink ? "" : "/"} className="my-auto">
        <motion.img
          initial={{ width: 200 }}
          whileInView={{ width: 150 }}
          transition={{ duration: 1 }}
          className={`w-6 lg:w-36 ${customStyle}`}
          src={require("../assets/logo-white.png")}
          alt="Naifty Logo"
        />
      </Link>
    </>
  );
};
