import React, { useState } from 'react';
import Card from './Card';

import { GifExpertApp } from './gifExpert/GiftExpertApp';
import { FirstApp } from './FirstApp'
import { Arrays } from './Arrays/Arrays';

//imagenes
import imagen1 from '../assets/punto1.jpg';
import imagen2 from '../assets/punto2.jpg';
import imagen3 from '../assets/punto3.jpg';

//datos de las cartas
const cards = [
  {
    id: 1,
    title: 'Gif Expert',
    descripcion:"Muestra una gran variedad de gifs",
    image: imagen1,
    component: GifExpertApp,
  },
  {
    id: 2,
    title: 'Contador',
    descripcion:"Añade o resta del conteo",
    image: imagen2,
    component: FirstApp,
  },
  {
    id: 3,
    title: 'Tarea de arreglos',
    descripcion:"Una tarea donde se debe implementar varios arreglos",
    image: imagen3,
    component: Arrays,
  },
];

function Cards() {
  const [showCards, setShowCards] = useState(true);
  const [showComponent, setShowComponent] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleClick = (card) => {
    setSelectedCard(card);
    setShowComponent(true);
    setShowCards(false);
  };

  const handleShowCards = () => {
    setShowComponent(false);
    setShowCards(true);
    setSelectedCard(null);
  };

  return (
    <div className="container">
      {showCards && (
        <div className="row">
          {cards.map((card) => (
            <div className="col-md-4"  key={card.id} onClick={() => handleClick(card)}>
                <Card title={card.title} imgSource={card.image} descripcion={card.descripcion}/>            
            </div>
          ))}
        </div>
      )}

      {showComponent && selectedCard && (
        <div className='componentes animate__animated animate__zoomInDown'>
          <selectedCard.component key={selectedCard.id} />
        </div>
      )}

      {showComponent && !selectedCard && (
        <div>
          <button
            className='btn btn-primary btn-lg'
            style={{ position: 'fixed', bottom: '10px', right: '10px' }}
            onClick={handleShowCards}
          >
            Show Cards
          </button>
        </div>
      )}

      {showComponent && (
        <button
          className='btn btn-primary btn-lg'
          style={{ position: 'fixed', bottom: '10px', right: '10px' }}
          onClick={handleShowCards}
        >
          Show Cards
        </button>
      )}


      {selectedCard && selectedCard.url && (
        <div>
          <a href={selectedCard.url} target="_blank" rel="noopener noreferrer">
            Go to Google
          </a>
        </div>
      )}
    </div>
  );
}

export default Cards;