import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0b132b] text-gray-300 pt-12">
      
      {/* Top bar */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 pb-8 border-b border-gray-700">
        <div className="text-sm">
          📞 +237 6 40 80 79 72 /+237 670 63 48 39
          <span className="mx-4">✉ dakecivil@gmail.com</span>
        </div>

        <a
          href="#contact"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition"
        >
          Collaborer avec nous
        </a>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Social */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Suivez-nous sur nos réseaux
          </h3>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/share/14S9eYy9VCE/?mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded hover:bg-blue-600 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://wa.me/237640807972"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded hover:bg-green-600 transition"
            >
              <FaWhatsapp />
            </a>

             <a
              href="https://www.tiktok.com/@dake.civil?_r=1&_t=ZM-92V5tJjCr7r"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded hover:bg-black transition"
            >
              <FaTiktok />
            </a>

             <a
              href="https://www.linkedin.com/in/dake-civil-4763473a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded hover:bg-blue-800 transition"
            >
              <FaLinkedinIn />
            </a>

          </div>
        </div>

        {/* Liens rapides */}
        <div>
          <h3 className="text-white font-semibold mb-4">Liens rapides</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-white">Accueil</a></li>
            <li><a href="#about" className="hover:text-white">À propos</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#projects" className="hover:text-white">Projets</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Nos services */}
        <div>
          <h3 className="text-white font-semibold mb-4">Nos services</h3>
          <ul className="space-y-2 text-sm">
            <li>Études & conception BTP</li>
            <li>Infrastructures routières</li>
            <li>Ouvrages d’art</li>
            <li>Assistance maîtrise d’ouvrage</li>
            <li>Expertise & contrôle qualité</li>
          </ul>
        </div>

        {/* Formations / Expertise */}
        <div>
          <h3 className="text-white font-semibold mb-4">Domaines d’expertise</h3>
          <ul className="space-y-2 text-sm">
            <li>Bâtiments & génie civil</li>
            <li>Suivi de projets</li>
            <li>Calcul de structures</li>
            <li>Gestion des risques</li>
            <li>Conformité & normes</li>
          </ul>
        </div>

      </div>

    </footer>
  );
};

export default Footer;