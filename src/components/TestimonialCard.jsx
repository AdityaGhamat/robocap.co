import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const TestimonialCard = ({ name, designation, comment, image, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{
        duration: 0.6,
        delay: delay,
        type: "tween",
        ease: [0.42, 0, 0.58, 1],
      }}
      className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md flex flex-col justify-between m-5 transition-transform transform hover:scale-105 duration-300 hover:shadow-xl"
    >
      <div className="flex items-center mb-4">
        <img
          src={image}
          alt={`${name} profile`}
          className="w-14 h-14 rounded-full mr-4 border border-gray-300"
        />
        <div>
          <h5 className="font-bold text-gray-900 text-lg">{name}</h5>
          <span className="text-sm text-gray-500">{designation}</span>
        </div>
      </div>
      <p className="text-gray-700 text-base p-2 flex-grow">{comment}</p>
    </motion.div>
  );
};

export default TestimonialCard;
