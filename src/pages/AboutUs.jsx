import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-[#f2f4f6] py-12 px-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-lg mb-6 text-gray-700">
            RoboCapital is a boutique financial services firm based in Mumbai,
            India.
          </p>
          <p className="text-lg mb-6 text-gray-700">
            We aim to provide comprehensive investment solutions to our clients
            across various asset classes. We firmly believe that bespoke
            services tailored to the unique financial goals of individuals and
            corporates are very important.
          </p>
          <p className="text-lg mb-6 text-gray-700">
            Our high-quality research is based on some of the finest financial
            models in the world, including the Nobel Prize-winning asset
            construction model from Harry Markowitz and various other leading
            indicators. Our management team has successfully invested in markets
            for over 25 years, enduring and succeeding through various bull and
            bear market cycles.
          </p>
          <p className="text-lg mb-6 text-gray-700">
            We prioritize protecting wealth first and then aim to enhance
            returns once that foundation is secure. We do not chase market fads
            but instead design assets suitable to the risk appetite, lifestyle,
            and investment behavior of our clients.
          </p>
          <p className="text-lg mb-6 text-gray-700">
            RoboCapital has been featured in leading media outlets such as CNBC,
            Bloomberg, and The Economic Times. If you are looking to make a
            quick profit in the market, we may not be the best fit, as we are
            focused on long-term growth and sustainability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
