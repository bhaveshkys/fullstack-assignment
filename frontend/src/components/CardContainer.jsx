import React from 'react'
import Card from './Card';
const CardContainer = ({cards}) => {
  console.log(cards)
  if (cards.error) {
    
    return <p className="text-center text-gray-600 m-10">{cards.error}</p>;
  }
  if (!cards || cards.length === 0) {
   
    return <p className="text-center text-gray-600 m-10">No cards found.</p>;
  }
  return (
    <section className="grid grid-cols-2 gap-20 py-12 px-56 bg-white">
      {cards.map(card => (
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
        />
      ))}
    </section>
  );
  
}

export default CardContainer