import { useState } from 'react';
import { CardsLeft, DealButton, ResetButton, DisplayCards } from './components';
import { deck } from './helpers/deck';

export const App = () => {
  const [cards, setCards] = useState(deck);
  const [toDisplayCards, setToDisplayCards] = useState(['', '', '', '', '']);
  const [aces, setAces] = useState(4);
  const [results, setResults] = useState(false);

  return (
    <>
      <h1>Cards Game</h1>
      <CardsLeft
        deck={deck}
        aces={aces}
        setResults={setResults}
        results={results}
      />
      <DisplayCards toDisplayCards={toDisplayCards} />

      {results === false && (
        <DealButton
          deck={deck}
          setCards={setCards}
          setToDisplayCards={setToDisplayCards}
          setAces={setAces}
          aces={aces}
        />
      )}

      <ResetButton />
    </>
  );
};
