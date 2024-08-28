import React from 'react'
import './Products.css'; // 


const Products = () => {
  return (
   <section id="box" className="content services bg-gray-800">
    <article className="container mx-auto px-4">
      <h1 className=" title-primary text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white text-center">Nuestros Servicios</h1>
      <p className="text-lg text-wi text-white text-center mb-8">
        En Amarok, ofrecemos soluciones integrales de rastreo satelital, venta de equipos de cómputo de alta gama, cámaras de seguridad y complementos gaming. Nuestro compromiso es brindar tecnología de vanguardia para satisfacer todas tus necesidades.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  <div className="service-card bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg shadow-2xl p-6 text-center">
    <i className="fa-solid fa-laptop fa-3x transition-opacity"></i>
    <h3 className="text-xl font-bold mb-2 text-white">Equipos de Cómputo</h3>
    <p className="text-white">La mejor oferta de laptops y equipos de mesa a tu disposición.</p>
  </div>
  <div className="service-card bg-gradient-to-br from-green-500 to-teal-500 rounded-lg shadow-2xl p-6 text-center">
    <i className="fa-solid fa-camera fa-3x transition-opacity"></i>
    <h3 className="text-xl font-bold mb-2 text-white">Cámaras para tu Negocio</h3>
    <p className="text-white">Protege tus instalaciones con nuestras cámaras de seguridad de última generación.</p>
  </div>
  <div className="service-card bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg shadow-2xl p-6 text-center">
    <i className="fa-solid fa-shield-halved fa-3x transition-opacity"></i>
    <h3 className="text-xl font-bold mb-2 text-white">Seguridad 24/7</h3>
    <p className="text-white">Protege tus instalaciones con nuestras cámaras de seguridad de última generación.</p>
  </div>
  <div className="service-card bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg shadow-2xl p-6 text-center">
    <i className="fa-solid fa-location-dot fa-3x transition-opacity"></i>
    <h3 className="text-xl font-bold mb-2 text-white">Rastreo Satelital</h3>
    <p className="text-white">Monitorea tus activos en tiempo real con nuestras avanzadas soluciones de rastreo satelital.</p>
        </div>
      </div>
    </article>
  </section>
  )
}

export default Products