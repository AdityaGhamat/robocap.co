import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ServiceCard = ({ icon, name, description, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{
        duration: 0.5,
        delay: delay,
        type: "tween",
        ease: [0.42, 0, 0.58, 1],
      }}
      className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm flex flex-col justify-between m-5 transition-transform transform hover:scale-105 duration-300 hover:shadow-xl"
    >
      <div className="flex items-center space-x-3 mb-4">
        <span className="text-blue-500 text-3xl" aria-label={name}>
          {icon}
        </span>
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
      </div>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
