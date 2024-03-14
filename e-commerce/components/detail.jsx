import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  const [print, setPrint] = useState(null);

  useEffect(() => {
    const fetchPrintDetail = async () => {
      try {
        const response = await axios.get(`https://65b907e2b71048505a8a06c0.mockapi.io/api/prints/${id}`);
        setPrint(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des détails du produit', error);
      }
    };

    fetchPrintDetail();
  }, [id]);

  if (!print) {
    return <p>Chargement des détails du produit...</p>;
  }

  return (
    <div>
      <h2>{print.title}</h2>
      <p>Description: {print.description}</p>
      <img src={print.image} alt={print.title} />
      <p>Prix: {print.price} €</p>
      <p>Taille: {print.size}</p>
      <p>Collection: {print.collection}</p>
    </div>
  );
};

export default Detail;
