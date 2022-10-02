import { detectAce } from '../helpers/detectAce';

export const DealButton = ({
  deck,
  setCards,
  setToDisplayCards,
  setAces,
  aces,
}) => {
  const selectedCards = [];
  const toShow = [];
  const handleDeal = () => {
    for (let index = 0; index < 5; index++) {
      const random = Math.floor(Math.random() * deck.length);
      const randomValue = deck[random];
      selectedCards.push(randomValue);
      setCards(deck.splice(random, 1));
      detectAce(selectedCards, setAces, aces);
    }
    selectedCards.map((element) => {
      toShow.push(element);
    });
    setToDisplayCards(toShow);
  };

  return (
    <div className="flexContent">
      <button className="dealBtn" onClick={handleDeal}>
        Deal
      </button>
    </div>
  );
};
