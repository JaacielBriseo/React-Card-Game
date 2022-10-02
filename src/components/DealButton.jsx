import { detectAce } from '../helpers/detectAce';
import { onDeal } from '../helpers/handDeal';

export const DealButton = ({
  deck,
  setCards,
  setToDisplayCards,
  setAces,
  aces,
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
    <div className="flexContent">
      <button className="dealBtn" onClick={handleClick}>
        Deal
      </button>
    </div>
  );
};
