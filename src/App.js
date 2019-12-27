import React from 'react';
import './App.css';
import Card from './components/Card';
import CardsData from './services/cards';

function App() {
  const [cards, setCards] = React.useState(CardsData.map(card => ({ ...card, flipped: false })));

  const flipCard = cardToFlip => {
    setCards(state => {
      const updatedCards = state.map(card => {
        const flipped = card.id === cardToFlip.id ? !card.flipped : card.flipped;
        return { ...card, flipped };
      });
      return updatedCards;
    });
  };

  return (
    <>
      <header>
        <h1>StudyDeck</h1>
      </header>
      <main>
        {cards.map(card => (
          <Card key={card.id} card={card} onFlip={flipCard} />
        ))}
      </main>
    </>
  );
}

export default App;
