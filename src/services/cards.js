const getCards = async () => {
  const data = { cards: [], error: null };
  try {
    data.cards = await fetch('/cards.json').then(r => r.json());
  } catch( error ) {
    data.error = error.messsage;
  }
  return data;
};

export {
  getCards
};
