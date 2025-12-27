import React, { useRef, useEffect, useState } from "react";

const ContactSectionModern = () => {
  const formRef = useRef(null);
  const [focused, setFocused] = useState({});

 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });


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

    if (formRef.current) observer.observe(formRef.current);
  }, []);

  
  const handleFocus = (field) => setFocused({ ...focused, [field]: true });
  const handleBlur = (field, value) => {
    if (!value) setFocused({ ...focused, [field]: false });
  };

  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://dakecivil.onrender.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert("Message envoyé avec succès ✅");
        setFormData({ name: "", email: "", message: "" });
        setFocused({});
      } else {
        alert("Erreur lors de l’envoi ❌");
      }
    } catch (error) {
      alert("Impossible de contacter le serveur ❌");
    }
  };

  return (
    <section id="contact" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">

       
        <div className="text-gray-900 flex flex-col justify-center space-y-6">
          <h2 className="text-4xl font-bold mb-4 text-purple-600">
            Contactez-nous
          </h2>
          <p className="text-gray-700 text-lg">
            Vous avez un projet ? Parlons-en !
          </p>

          <div className="space-y-4">
            {[
              {
                icon: "M21 8V7l-3 2-2-1-1 2-3-2-3 2-1-2-2 1-3-2v1l3 2-3 2v1l3-2 2 1 1-2 3 2 3-2 1 2 2-1 3 2v-1l-3-2 3-2z",
                text: "dakecivil@gmail.com",
              },
              {
                icon: "M22 16.92v3a1 1 0 0 1-1.11 1 19.9 19.9 0 0 1-8.63-3.1 19.62 19.62 0 0 1-6-6A19.9 19.9 0 0 1 2.08 3.11 1 1 0 0 1 3 2h3a1 1 0 0 1 1 .75c.1.37.23.73.38 1.09a1 1 0 0 1-.27 1.09L6.21 6.7a16 16 0 0 0 6 6l1.77-1.77a1 1 0 0 1 1.09-.27c.36.15.72.28 1.09.38a1 1 0 0 1 .75 1z",
                text: "+237 640 80 79 72/ +237 670 63 48 39",
              },
              {
                icon: "M21 10h-3V7a5 5 0 0 0-5-5H9a5 5 0 0 0-5 5v3H1v11h22V10zM9 7h4a3 3 0 0 1 3 3v3H6V10a3 3 0 0 1 3-3zm-5 9v-7h16v7H4z",
                text: "Yaoundé, Cameroun",
              },
            ].map((item, idx) => (
              <p
                key={idx}
                className="flex items-center text-gray-700 group cursor-pointer"
              >
                <svg
                  className="w-6 h-6 mr-3 text-purple-600 transition-transform duration-300 group-hover:rotate-12"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d={item.icon} />
                </svg>
                {item.text}
              </p>
            ))}
          </div>
        </div>

        
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-gray-50 p-8 rounded-2xl shadow-xl opacity-0 translate-y-10 transition-all duration-700 flex flex-col space-y-6"
        >
          {[
            { name: "name", type: "text", placeholder: "Nom complet" },
            { name: "email", type: "email", placeholder: "Email" },
          ].map((field) => (
            <div key={field.name} className="relative">
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                onFocus={() => handleFocus(field.name)}
                onBlur={(e) => handleBlur(field.name, e.target.value)}
                className="peer w-full p-4 rounded-lg border border-gray-300 bg-white text-gray-900 outline-none focus:border-orange-600 focus:ring-1 focus:ring-orange-600"
              />
              <label
                className={`absolute left-4 top-4 text-gray-400 text-sm transition-all duration-300
                ${
                  focused[field.name]
                    ? "-translate-y-6 text-purple-600 text-xs"
                    : ""
                }`}
              >
                {field.placeholder}
              </label>
            </div>
          ))}

          <div className="relative">
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => handleFocus("message")}
              onBlur={(e) => handleBlur("message", e.target.value)}
              className="peer w-full p-4 rounded-lg border border-gray-300 bg-white text-gray-900 outline-none focus:border-orange-600 focus:ring-1 focus:ring-orange-600"
            ></textarea>
            <label
              className={`absolute left-4 top-4 text-gray-400 text-sm transition-all duration-300
              ${
                focused.message
                  ? "-translate-y-6 text-purple-600 text-xs"
                  : ""
              }`}
            >
              Votre message
            </label>
          </div>

          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 transition transform hover:scale-105 px-6 py-3 rounded-xl font-semibold text-white shadow-md hover:shadow-lg"
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSectionModern;