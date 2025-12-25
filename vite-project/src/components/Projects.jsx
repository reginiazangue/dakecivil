import React from "react";

const projects = [
  { id: 1, name: "Fondation pour pylône électrique", image: "/Images/project1.jpg" },
  { id: 2, name: "Fondation pour pylône électrique", image: "/Images/project2.jpg" },
  { id: 3, name: "Projet VRD", image: "/Images/project3.jpg" },
  { id: 4, name: "Projet VRD", image: "/Images/project4.jpg" },
  { id: 5, name: "Projet VRD", image: "/Images/project5.jpg" },
  { id: 6, name: "Projet VRD", image: "/Images/project6.jpg" },
  { id: 7, name: "Ouvrage d'art", image: "/Images/project9.jpg" },
  { id: 8, name: "Ouvrage d'art", image: "/Images/project10.jpg" },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#0B1C2D] text-white py-16">
      {/* Titre */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-violet-600 mb-4">Nos Projets</h2>
        <p className="text-gray-300 max-w-3xl mx-auto">
          Découvrez une sélection de projets réalisés par DAKE CIVIL, illustrant notre savoir-faire et expertise.
        </p>
      </div>

      {/* Grille des projets */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-center py-2">
              {project.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;