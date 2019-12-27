import React from 'react';
import './App.css';
import Card from './components/Card';
import { getCards } from './services/cards';

function App() {
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const { cards, error } = await getCards();
      if (error) return;
      const cardsState = cards.map(card => ({ ...card, flipped: false }));
      setCards(cardsState);
    })();
  }, []);

  const flipCard = cardToFlip => {
    setCards(state =>
      state.map(card => {
        if (card.id !== cardToFlip.id) return card;
        return { ...card, flipped: !card.flipped };
      })
    );
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
