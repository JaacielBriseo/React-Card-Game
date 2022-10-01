import { useState } from 'react';
import { CardsLeft, DealButton, ResetButton, DisplayCards } from './components';
import { deck } from './helpers/deck';

export const App = () => {
  const [cards, setCards] = useState(deck);
  const [toDisplayCards, setToDisplayCards] = useState([]);

  return (
    <>
      <h1>Cards Game</h1>

      <CardsLeft deck={deck} />

      <DisplayCards toDisplayCards={toDisplayCards}/>

      <DealButton
        deck={deck}
        setCards={setCards}
        setToDisplayCards={setToDisplayCards}
      />

      <ResetButton />
    </>
  );
};
