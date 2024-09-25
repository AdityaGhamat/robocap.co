import Hero from "../components/Hero";
import NumbersAtGlance from "../components/NumberAtGlance";
import Team from "../components/Team";
import Testimonial from "../components/Testimonial";
import AboutUs from "./AboutUs";
import Services from "./Services";
import { Element } from "react-scroll";

const Home = () => {
  return (
    <div>
      <Element name="hero">
        <Hero />
      </Element>
      <Element name="testimonial">
        <Testimonial />
      </Element>
      <Element name="numbersatglance">
        <NumbersAtGlance />
      </Element>
      <Element name="services">
        <Services />
      </Element>
      <Element name="team">
        <Team />
      </Element>
      <Element name="aboutus">
        <AboutUs />
      </Element>
    </div>
  );
};

export default Home;
