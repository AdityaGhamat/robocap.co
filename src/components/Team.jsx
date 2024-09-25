import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import amit from "../assets/profile-photos/amit.webp";
import mukesh from "../assets/profile-photos/mukesh.webp";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Amit Mehendale",
      title: "Co-Founder",
      bio: `Amit heads RoboCapital and is responsible for its overall growth. 
            Amit brings more than two decades of experience in corporate finance across various countries and sectors.

            In the relatively short period, RoboCapital has delivered excellent results for its clients.

            Prior to founding RoboCapital, Amit served as group CFO at IIFL and managed a balance sheet size in excess of $2 billion. 
            Amit was also part of the core founding team at IIFL. He also worked in leadership roles in large multinational companies like Schlumberger, GlaxoSmithKline at the country level.

            He holds an MBA from London Business School, is a Chartered Accountant, and CISA certified.`,
      image: amit,
    },
    {
      id: 2,
      name: "Mukesh Kumar Singh",
      title: "Co-Founder",
      bio: `Mukesh oversees broking and distribution business at RoboCapital.

            Prior to co-founding RoboCapital, Mukesh headed the Gold loan lending business at IIFL, where he managed a team of more than 5000 employees with about Rs.1000 Crore of revenue. 
            He also served as Director on the board of India Infoline Finance Limited (IIFL) and IIFL Wealth. At IIFL, he was part of the core team during the start-up stage and later held several leadership roles.

            He holds a Mechanical Engineering degree and a Post Graduate Diploma in Business Administration.`,
      image: mukesh,
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <div className="container mx-auto py-12" ref={ref}>
      <motion.h1
        className="text-3xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        Meet Our Team
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.id}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center"
            initial={{ opacity: 0, x: -100 }} // Start off-screen to the left
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }} // Slide in from left when inView
            transition={{ duration: 0.6, delay: index * 0.2 }} // Staggered animation for each card
          >
            <motion.img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full mb-4"
              whileHover={{ scale: 1.1, rotate: 3 }} // Hover animation for scaling and slight rotation
              transition={{ duration: 0.3 }}
            />
            <h2 className="text-xl font-bold text-gray-900">{member.name}</h2>
            <h3 className="text-md font-semibold text-gray-600">
              {member.title}
            </h3>
            <p className="text-gray-700 text-center mt-4">{member.bio}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Team;
