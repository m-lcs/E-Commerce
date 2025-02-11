import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useCart } from 'react-use-cart';

const Oeuvre = () => {
  const [printsData, setPrintsData] = useState(null);
  const { addItem } = useCart();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://65b907e2b71048505a8a06c0.mockapi.io/api/prints');
        setPrintsData(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données', error);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (print) => {
    addItem(print);
  };

  return (
    <div className="centered-container">
      {printsData ? (
        <div className="centered-content">
                <h1>Oeuvres</h1>
          {printsData.map((print, index) => (
            <div key={index}>
              <p>Titre: {print.title}</p>
              <p>Description: {print.description}</p>
              <a href={`detail/${print.id}`} target="_blank">
                <img src={print.image} alt="React logo" />
              </a>
              <p>Prix: {print.price} €</p>
              <p>Taille: {print.size}</p>
              <p>Collection: {print.collection}</p>
              <button onClick={() => handleAddToCart(print)}>Ajouter au panier</button>
              <a href={`detail/${print.id}`} target="_blank">
                <button>Voir détail</button>
              </a>
            </div>
          ))}
        </div>
      ) : (
        <p>Chargement des données...</p>
      )}
    </div>
  );
};

export default Oeuvre;
