import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import React, { Suspense, lazy } from "react";

import Home from "../pages/Home";
import Layout from "../pages/Layout";
import TermsAndConditions from "../pages/TermsAndConditions";
import AboutUs from "../pages/AboutUs";
import Testimonial from "./Testimonial";
import Investing from "../pages/Investing";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route
            index
            path=""
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Home />
                </motion.div>
              </Suspense>
            }
          />
          <Route
            path="termsAndconditions"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <TermsAndConditions />
                </motion.div>
              </Suspense>
            }
          />
          <Route
            path="aboutus"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <AboutUs />
                </motion.div>
              </Suspense>
            }
          />
          <Route
            path="testimonials"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Testimonial />
                </motion.div>
              </Suspense>
            }
          />
          <Route
            path="investing"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Investing />
                </motion.div>
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
