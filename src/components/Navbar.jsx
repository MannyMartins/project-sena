import React from "react";
import logo from '../img/logoAmarok1.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <section>
    <nav className="bg-blue-600 p-4 relative"> 
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center"> 
          <img src={logo} alt="Logo" className="h-8 mr-4" /> 
          <h1 className="text-zinc-50 text-2xl font-bold text-shadow-neon"> 
            Inversiones Tecnologicas Amarok
          </h1>
        </div>
        <ul className="flex space-x-4">
      <Link to="/" className="text-white   
 text-shadow-neon">Inicio</Link>
      <Link to="/products" className="text-white text-shadow-neon">Nuestros Productos</Link>
      <Link to="/somos" className="text-white text-shadow-neon">¿Quiénes Somos?</Link>
      <Link to="/products" className="text-white text-shadow-neon">Nuestros Servicios</Link>
      <a href="/loginform" className="text-white text-shadow-neon">Login</a>
      <Link to="/contact" className="text-white text-shadow-neon">Contacto</Link>
        </ul>
      </div>

      {/* ... (código para los iconos sociales si los necesitas) ... */}
    </nav>
    </section>
  );
}

export default Navbar;