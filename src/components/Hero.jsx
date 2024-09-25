import banner from "../assets/banner.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../lib/variants";
import { Link } from "react-scroll";
const Hero = () => {
  return (
    <div className="relative">
      <img
        src={banner}
        alt="banner-image"
        className="h-full w-full object-cover opacity-90"
      />
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="absolute inset-0 flex flex-col justify-center items-center text-white"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 poppins-Medium text-shadow">
          Invest Smartly. Live Freely.
        </h1>
        <div className="flex gap-3 font-montserrat">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-lg font-semibold rounded-2xl transition-colors duration-300">
            <Link
              to="numbersatglance"
              offset={-50}
              smooth={true}
              duration={500}
            >
              Get Started
            </Link>
          </button>
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-lg font-semibold rounded-2xl transition-colors duration-300">
            <Link to="services" offset={-25} smooth={true} duration={500}>
              Our Services
            </Link>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
