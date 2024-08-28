import React from "react";
import '../components/Hero.css';
import Footer from "./Footer";

function Hero() {
  return (
    <section>
      <header className="hero bg-gray-900 py-24 md:py-32 text-center relative overflow-hidden">
        {/* Fondo oscuro, más alto en pantallas grandes, posicionamiento relativo para elementos internos */}

        {/* Imagen de fondo con efecto de paralaje */}
        <div className="hero-background absolute top-0 left-0 w-full h-full bg-cover bg-center transform scale-110 translate-y-6 md:translate-y-12 transition-transform duration-500"
          style={{ backgroundImage: `url('/ruta/a/tu/imagen-hero.jpg')` }}>
        </div>

        {/* Overlay oscuro para mejorar la legibilidad del texto */}
        <div className="hero-overlay absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

        <div className="content container mx-auto px-4 relative z-10">
          {/* Contenedor centrado con padding y posicionamiento relativo para estar encima de los elementos de fondo */}
          <h1 className="title-primary text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white">
            {/* Texto más grande, blanco y con sombra */}
            Bienvenidos a <span className="text-blue-500">Inversiones Tecnológicas Amarok</span>
          </h1>
          <p className="text-white text-lg md:text-3xl leading-relaxed max-w-3xl mx-auto mb-8">
            {/* Texto descriptivo */}
            Descubre cómo nuestras soluciones tecnológicas pueden impulsar tu negocio.
          </p>

          {/* Sección de destacados con iconos */}
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center">
              <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              </svg>
              <span className="card text-white">Tecnología de Vanguardia</span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/200/svg">
              </svg>
              <span className="card text-white">Rastreo Satelital Avanzado</span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              </svg>
              <span className="card text-white">Desarrollo de Software a Medida</span>
            </div>
          </div>

          {/* Botón de llamado a la acción */}
          <div className="justify-self-auto items-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded mt-8">
              Más Información
            </button>
          </div>
        </div>
      </header>
    </section>
  );
}

export default Hero;