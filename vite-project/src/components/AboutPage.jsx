import React, { useState, useRef, useEffect } from "react";


const sections = [
  {
    title: "Qui sommes-nous ?",
    content:
      "Dake Civil est une entreprise de bâtiment et travaux publics expérimentée, spécialisée dans la conception, la réalisation et la gestion de projets de construction de grande envergure. Notre équipe d'experts qualifiés et passionnés est dédiée à fournir des solutions innovantes et personnalisées pour répondre à vos besoins spécifiques.",
    icon: "/Images/logo.jpg",
  },
  {
    title: "Prestations Intellectuelles",
    content: `- Études et conception de projets de bâtiment et de travaux publics (routes, ponts, infrastructures, etc.)
- Analyse et expertise technique de projets
- Développement de solutions personnalisées pour les clients
- Assistance à la maîtrise d'ouvrage et à la maîtrise d'œuvre`,
    icon: "/Images/About2.jpg",
  },
  {
    title: "Suivi de Projets",
    content: `- Suivi et contrôle de l'avancement des projets
- Gestion des risques et des délais
- Coordination entre les différents intervenants
- Contrôle de la qualité et conformité aux normes`,
    icon: "/Images/About3.jpg",
  },
  {
    title: "Domaines d'Expertise",
    content: `- Conception et réalisation de bâtiments (habitation, bureaux, équipements publics, etc.)
- Infrastructures routières
- Ouvrages d'art`,
    icon: "/Images/logo.jpg",
  },
  {
    title: "Nos Objectifs",
    content: `- Fournir des prestations de haute qualité pour répondre aux besoins des clients
- Assurer la sécurité, la durabilité et la conformité des projets
- Favoriser la collaboration et la communication entre les différents acteurs des projets`,
    icon: "/Images/logo.jpg",
  },
];

const AboutPage = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    sections.forEach((_, i) => {
      const ref = contentRefs.current[i];
      if (ref) {
        ref.style.maxHeight =
          openIndex === i ? ref.scrollHeight + "px" : "0px";
      }
    });
  }, [openIndex]);

  return (
    <div id="about" className="bg-gray-100 min-h-screen flex flex-col items-center py-12">
      <div className="container mx-auto px-4">
        
        
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-700">À propos de DAKE_CIVIL</h1>
          <p className="text-lg text-gray-600 mt-4">
            Votre partenaire de confiance pour vos projets de génie civil et de construction
          </p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition"
            >
              <div
                className="flex items-center cursor-pointer"
                onClick={() => toggleSection(index)}
              >
                
                <img
                  src={section.icon}
                  alt={section.title}
                  className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-purple-600 flex-shrink-0"
                />
                <div className="flex-1 flex justify-between items-center">
                  <h2 className="text-xl md:text-2xl font-semibold text-purple-800">
                    {section.title}
                  </h2>
                  <span className="text-blue-700 font-medium hover:underline">
                    {openIndex === index ? "Réduire" : "En savoir plus"}
                  </span>
                </div>
              </div>

              
              <div
                ref={(el) => (contentRefs.current[index] = el)}
                className="overflow-hidden transition-all duration-500 mt-4 text-gray-700 whitespace-pre-line"
                style={{ maxHeight: "0px" }}
              >
                {section.content}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default AboutPage;