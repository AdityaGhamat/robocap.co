import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const NumbersAtGlance = () => {
  const stats = [
    { number: 110, description: "Work Experience in Years" },
    { number: 10, description: "Countries Covered" },
    { number: 27, description: "Clients" },
    { number: 80, description: "Financial Services Experience in Years" },
  ];

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [countTrigger, setCountTrigger] = useState(false);

  useEffect(() => {
    if (inView) {
      setCountTrigger(true);
    } else {
      setCountTrigger(false);
    }
  }, [inView]);

  return (
    <div className="bg-blue-900 text-white py-12" ref={ref}>
      <h2 className="text-3xl font-bold text-center mb-8 poppins-semibold">
        Numbers at a Glance
      </h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
              ease: "easeOut",
            }}
          >
            <div className="text-5xl font-extrabold mb-2">
              {countTrigger && (
                <CountUp end={stat.number} duration={2.75} key={countTrigger} />
              )}
            </div>
            <div className="text-lg">{stat.description}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default NumbersAtGlance;
