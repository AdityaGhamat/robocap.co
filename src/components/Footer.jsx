import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-3">RoboCap</h2>
          <p className="mt-4 font-light">
            RoboCap is a boutique financial services firm based in Mumbai,
            India. We believe that bespoke services are core to our philosophy
            as every individual has unique financial goals.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold border-b-2 border-gray-600 pb-2 mb-3">
            Useful Links
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Home",
              "About Us",
              "Team",
              "Careers",
              "Blogs",
              "Terms of Service",
              "Privacy Policy",
            ].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="hover:underline hover:text-gray-300 transition duration-300"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold border-b-2 border-gray-600 pb-2 mb-3">
            Contact Us
          </h3>
          <p className="mt-4 font-light">
            S-168,B-WING 2 ND FLOOR EXPRESS ZONE MALL ,OFF WE HIGHWAY OPP,
            .ADANI ELECTRICITY GOREGAON MUMBAI 400063
          </p>
          <p className="mt-2 font-light">Phone: +91-90298 00731</p>
          <p className="mt-2 font-light">Email: support@robocap.co</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold border-b-2 border-gray-600 pb-2 mb-3">
            Request Callback
          </h3>
          <form className="mt-4">
            <input
              type="text"
              placeholder="Enter Mobile No."
              className="w-full p-2 rounded border border-gray-400 focus:outline-none focus:border-blue-300 transition duration-300 mb-4"
            />
            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-600 p-2 rounded transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="container mx-auto flex justify-between items-center mt-10 border-t border-gray-600 pt-4">
        <p className="text-sm">© 2024 RoboCap. All Rights Reserved.</p>
        <div className="flex space-x-4">
          {["facebook-f", "twitter", "youtube", "linkedin-in"].map((icon) => (
            <a
              href="#"
              className="hover:text-gray-400 transition duration-300"
              key={icon}
            >
              <i className={`fab fa-${icon}`}></i>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
