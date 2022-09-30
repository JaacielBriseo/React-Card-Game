import { CardsLeft } from './components/CardsLeft';
import { DealButton } from './components/DealButton';
import { DisplayCards } from './components/DisplayCards';
import { ResetButton } from './components/ResetButton';

export const App = () => {
  return (
    <>
      <h1>Cards Game</h1>
      <CardsLeft />

      <DisplayCards />

      <DealButton />

      <ResetButton />
    </>
  );
};
