import TestimonialCard from "./TestimonialCard";
import bhawani from "../assets/profile-photos/bhawani.webp";
import malay from "../assets/profile-photos/malay.webp";
import mukeshmehta from "../assets/profile-photos/mukeshmehta.webp";

const Testimonial = () => {
  const testimonialInfo = [
    {
      id: 1,
      name: "Dr. Malay Niraj",
      designation: "Professor at NIT Jamshedpur",
      comment:
        "Awesome portal. Investment simplified for common investor. Recommended for everyone who wants long term wealth creation.",
      image: malay,
    },
    {
      id: 2,
      name: "Bhawani Singh Pathnia",
      designation:
        "Chief Agency Officer & Director Sales at PNB MetLife India Insurance Co. Ltd",
      comment:
        "Amazing. Apt use of technology, consumer friendly and easy to use...",
      image: bhawani,
    },
    {
      id: 3,
      name: "Mukesh Mehta",
      designation: "Principal at The Blackstone Group",
      comment:
        "Amazing product - people have to be made aware of this it is too good especially the payeezz feature.",
      image: mukeshmehta,
    },
  ];

  return (
    <div className="py-12 bg-gray-100">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-semibold text-gray-800 poppins-semibold">
          What Our Clients Say
        </h1>
      </div>
      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto px-5">
        {testimonialInfo.map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.id}
            name={testimonial.name}
            designation={testimonial.designation}
            comment={testimonial.comment}
            image={testimonial.image}
            delay={index * 0.2}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
