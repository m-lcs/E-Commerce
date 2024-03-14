// Navbar.js
import React from "react";
import "../public/app.css"; // Importation du fichier CSS pour les styles de la barre de navigation

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <ul>
          <li>Home</li>
          <li>Panier</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
