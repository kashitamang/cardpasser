import React from 'react';
import Card from './Card';
import { useGameContext } from './GameProvider';

export default function CardList({ cards, cardLocation }) {
  const {
    setSelectedCard, 
    setFrom, 
    selectedCard 
  } = useGameContext();

  return (
    <div className='card-list'>
      {
        cards.map((card => <Card 
          key={card.suit + card.value} 
          setSelectedCard={setSelectedCard} 
          selectedCard={selectedCard}
          cardLocation={cardLocation}
          setFrom={setFrom}
          card={card}
        />))
      }
    </div>
  );
}
