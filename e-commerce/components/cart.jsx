import React from 'react';
import { useCart } from 'react-use-cart';

const Cart = () => {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } = useCart();

  return (
    <div>
      <h2>Panier</h2>
      {isEmpty ? (
        <p>Votre panier est vide.</p>
      ) : (
        <>
          <p>Total d'articles uniques: {totalUniqueItems}</p>
          <ul>
            {items.map((item, index) => (
                console.log(item),  
              <li key={index}>
                <p>Titre: {item.title}</p>
                <p>Prix: {item.price} €</p>
                <p>Quantité: {item.quantity}</p>
                <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                <button onClick={() => removeItem(item.id)}>Supprimer</button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Cart;
