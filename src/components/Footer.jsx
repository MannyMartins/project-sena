import React from 'react';
import './Footer.css';

const Footer = () => {
  return (

    <footer className="footer">
      <nav className="nav bg-blue-600 p-4">
        <ul>
          <li><a href="#" className="text-zinc-50 text-2xl font-bold text-shadow-neon">Inicio</a></li>
          <li><a href="#" className="text-zinc-50 text-2xl font-bold text-shadow-neon">Servicios</a></li>
          <li><a href="#" className="text-zinc-50 text-2xl font-bold text-shadow-neon">Contacto</a></li>
        </ul>
        <div className="copyright text-zinc-50 text-2xl font-bold text-shadow-neon">
          © INVERSIONES TECNOLÓGICAS AMAROK
        </div>
      </nav>
    </footer>
  );
};

export default Footer;