export default function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full">
      
      {/* Image de fond (public/image1.jpg) */}
      <img
        src="/Images/acceuil.jpg"
        alt="Chantier DAKE CIVIL"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Contenu */}
      <div className="relative z-10 flex items-center h-full">
        <div className="max-w-4xl px-6 text-white">
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            DAKE CIVIL
          </h1>

          <p className="text-lg md:text-xl mb-6">
            Entreprise de Batiments et travaux pubics du Cameroun.
            "Construction batiments, routes et ouvrages durables".
          </p>

          <button
              onClick={() => {
               const element = document.getElementById("services");
             if (element) {
                element.scrollIntoView({ behavior: "smooth" });
                 }
              }}
               className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg"
              >
              Découvrir nos services
            </button>

        </div>
      </div>

    </section>
  );
}