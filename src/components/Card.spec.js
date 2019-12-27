import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Card from './Card';
const testCard = { id: 1, term: 'A test Card', answer: 'A test Answer' };

it('Renders term', () => {
  const { getByText } = render(<Card card={testCard} onFlip={() => {}} />);
  expect(getByText(testCard.term)).toBeInTheDocument();
});

it('Doesnt render answer initially', () => {
  const { queryByText } = render(<Card card={testCard} onFlip={() => {}} />);
  expect(queryByText(testCard.answer)).toBeNull();
});

it('Does render answer if flipped', () => {
  const { getByText } = render(<Card card={{...testCard, flipped: true}} onFlip={() => {}} />);
  expect(getByText(testCard.answer)).toBeInTheDocument();
});

it('Calls onFlip when clicked', () => {
  const onFlip = jest.fn();
  const { container } = render(<Card card={{...testCard, flipped: true}} onFlip={onFlip} />);
  fireEvent.click(container.firstChild);
  expect(onFlip).toHaveBeenCalled();
});
