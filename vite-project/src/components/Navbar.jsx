import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Fonction pour scroller vers une section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* 🔴 MODIFICATION ICI : Logo + texte */}
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            {/* 🟠 Logo circulaire */}
            <img
              src="/Images/logo.jpg"
              alt="Logo Dake Civil"
              className="w-10 h-10 rounded-full object-cover border border-purple-600"
            />

            {/* 🟠 Texte existant (inchangé) */}
            <span className="text-2xl font-bold text-purple-600">
              DAKE CIVIL
            </span>
          </div>


          {/* Menu desktop */}
          <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
            <li className="hover:text-purple-600 cursor-pointer" onClick={() => scrollToSection("hero")}>Accueil</li>
            <li className="hover:text-purple-600 cursor-pointer" onClick={() => scrollToSection("about")}>À propos</li>
            <li className="hover:text-purple-600 cursor-pointer" onClick={() => scrollToSection("services")}>Services</li>
            <li className="hover:text-purple-600 cursor-pointer" onClick={() => scrollToSection("projects")}>Projets</li>
            <li className="hover:text-purple-600 cursor-pointer" onClick={() => scrollToSection("contact")}>Contact</li>
          </ul>

          {/* Hamburger mobile */}
          <button
            className="md:hidden text-gray-700 text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="md:hidden bg-white shadow">
          <ul className="flex flex-col px-4 py-2 space-y-3 text-gray-700">
            <li className="cursor-pointer" onClick={() => scrollToSection("hero")}>Accueil</li>
            <li className="cursor-pointer" onClick={() => scrollToSection("about")}>À propos</li>
            <li className="cursor-pointer" onClick={() => scrollToSection("services")}>Services</li>
            <li className="cursor-pointer" onClick={() => scrollToSection("projects")}>Projets</li>
            <li className="cursor-pointer" onClick={() => scrollToSection("contact")}>Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
}