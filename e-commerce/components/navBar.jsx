// Navbar.js
import { Outlet, Link } from  'react-router-dom';
import React from "react";
import "../public/app.css"; // Importation du fichier CSS pour les styles de la barre de navigation

const Navbar = () => {
  return (
    <>
    <nav className="navbar">
        <ul>
          <li>
            <Link to='/'>Home</Link>
            </li>
          <li>
            <Link to='/panier'>Panier</Link>
            </li>
        </ul>
    </nav>

    <Outlet />
    </>
    
  );
};

export default Navbar;
