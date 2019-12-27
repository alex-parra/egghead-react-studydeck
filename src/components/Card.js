import React from 'react';

const Card = props => {
  const { card, onFlip } = props;
  const isFlipped = card.flipped || false;
  const cardClassName = 'card ' + (isFlipped ? 'flipped' : '');

  const handleClick = ev => {
    ev.preventDefault();
    onFlip(card);
  }

  const handleMouseLeave = ev => {
    if( isFlipped ) onFlip(card);
  }

  return (
    <div className={cardClassName} onClick={handleClick} onMouseLeave={handleMouseLeave}>
      <div className="sides">
        <div className="front">{card.term}</div>
        <div className="back">{isFlipped ? card.answer : ''}</div>
      </div>
    </div>
  );
};

export default React.memo(Card, (prev, next) => prev.card.flipped === next.card.flipped);
