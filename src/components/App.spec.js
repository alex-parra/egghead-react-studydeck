import React from 'react';
import { render, act } from '@testing-library/react';
import App from './App';
import { getCards } from '../services/cards';

jest.mock('../services/cards');

it('Renders App', async () => {
  const testCards = [
    { id: 1, term: 'A test Card 1', answer: 'A test Answer 1' },
    { id: 2, term: 'A test Card 2', answer: 'A test Answer 2' },
    { id: 3, term: 'A test Card 3', answer: 'A test Answer 3' },
  ];
  getCards.mockResolvedValue({cards: testCards, error: null});
  let getByText;
  let queryByText;
  await act(async () => { ({ getByText, queryByText } = render(<App />)); });
  testCards.forEach(card => {
    expect(getByText(card.term)).toBeInTheDocument();
    expect(queryByText(card.answer)).not.toBeInTheDocument();
  });
});
