import { detectAce } from '../helpers/detectAce';
import { onDeal } from '../helpers/handDeal';

export const DealButton = ({
  deck,
  setCards,
  setToDisplayCards,
  setAces,
  aces,
  results,
}) => {
  const selectedCards = [];
  const toShow = [];

  const handleClick = () => {
    onDeal(
      deck,
      selectedCards,
      detectAce,
      setAces,
      aces,
      toShow,
      setToDisplayCards,
      setCards
    );
  };
  return (
    <>
      {results ===
        false && (
          <button className="dealBtn" onClick={handleClick}>
            Deal
          </button>
        )}
    </>
  );
};
