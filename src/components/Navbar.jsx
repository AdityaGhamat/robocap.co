import React from "react";
import { motion } from "framer-motion";
import { slideDown } from "../lib/variants";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container flex justify-around h-[10vh] items-center">
      <motion.div variants={slideDown(0.3)} initial="initial" animate="animate">
        <img
          src="https://robocapital.in/assets/img/logo2.jpg"
          alt="robocapital-logo"
        />
      </motion.div>
      <motion.div variants={slideDown(0.3)} initial="initial" animate="animate">
        <ul className="flex gap-10 text-md montserrat-custom">
          <Link
            to={"/"}
            className={`cursor-pointer ${
              location.pathname === "/" ? "text-blue-500" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to={"/aboutus"}
            className={`cursor-pointer ${
              location.pathname === "/aboutus" ? "text-blue-500" : ""
            }`}
          >
            About us
          </Link>
          <Link
            to={"/testimonials"}
            className={`cursor-pointer ${
              location.pathname === "/testimonials" ? "text-blue-500" : ""
            }`}
          >
            Testimonials
          </Link>
          <Link
            to={"/investing"}
            className={`cursor-pointer ${
              location.pathname === "/investing" ? "text-blue-500" : ""
            }`}
          >
            Investing
          </Link>
        </ul>
      </motion.div>
    </div>
  );
};

export default Navbar;
