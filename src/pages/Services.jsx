import ServiceCard from "../components/ServiceCard";
import { Home, BarChart } from "lucide-react";

const Services = () => {
  const serviceArray = [
    {
      id: 1,
      icon: <BarChart aria-label="Investment Management Icon" />,
      name: "Investment Management",
      description:
        "“If you would be wealthy, think of saving as well as getting.” —Benjamin Franklin",
    },
    {
      id: 2,
      icon: <Home aria-label="Property Solutions Icon" />,
      name: "Property Solutions",
      description:
        "Real estate practice is not about selling or buying a home. It’s about representing your client’s greatest asset to your clients greatest benefit. – Alex Delgado",
    },
  ];

  return (
    <div className="py-12 bg-gray-100">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-semibold text-gray-800 poppins-semibold">
          Our Services
        </h1>
      </div>
      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto p-5">
        {serviceArray.map((service, index) => (
          <ServiceCard
            key={service.id}
            {...service}
            delay={index * 0.2} // Adding a slight delay between cards
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
