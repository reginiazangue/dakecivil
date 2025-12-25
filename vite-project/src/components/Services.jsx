import React, { useEffect, useRef } from "react";

const services = [
  {
    title: "Études et conception",
    description:
      "Nous élaborons des plans et des devis précis pour votre projet, en tenant compte de vos exigences et de votre budget.",
    icon: "/Images/About1.jpg",
  },
  {
    title: "Construction et Réalisation",
    description:
      "Notre équipe expérimentée prend en charge la construction et la réalisation de votre projet, avec une attention particulière à la qualité et aux délais.",
    icon: "/Images/About2.jpg",
  },
  {
    title: "Suivi et contrôle de projets",
    description:
      "Nous assurons la gestion complète de votre projet, de la conception à la livraison, pour vous garantir une expérience sans stress.",
    icon: "/Images/About3.jpg",
  },
  {
    title: "Expertise technique",
    description:
      "Analyse, audit et expertise technique des projets de construction et d’ouvrages d’art.",
    icon: "/Images/About4.jpg",
  },
];

const Services = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((el) => el && observer.observe(el));
  }, []);

  return (
    <section id="services" className="bg-[#0B1C2D] text-white py-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold mb-4">Nos services</h2>
        <p className="text-gray-300 max-w-3xl mx-auto mb-12">
          DAKE CIVIL accompagne les acteurs du bâtiment et des travaux publics
          à travers des prestations intellectuelles fiables et durables.
        </p>

        {/* Bouton En savoir plus */}
        <a
          href="/services-details.html"
          className="inline-block mb-16 border border-white px-8 py-3 rounded-md hover:bg-white hover:text-[#0B1C2D] transition"
        >
          En savoir plus
        </a>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-[#0F2A44] border border-[#163B5C] rounded-lg p-6
                         opacity-0 translate-y-10 transition-all duration-700"
            >
              <div className="w-14 h-14 mb-4 rounded-full bg-white flex items-center justify-center">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-7 h-7 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-300 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;