export const DealButton = ({ deck, setCards }) => {
  const selectedCards = [];
  const handleDeal = () => {
    for (let index = 0; index < 5; index++) {
      const random = Math.floor(Math.random() * deck.length);
      const randomValue = deck[random];
      selectedCards.push(randomValue);
      setCards(deck.splice(random, 1), ...deck);
    }
    console.log(selectedCards)
  };
  return (
    <div className="flexContent">
      <button className="dealBtn" onClick={handleDeal}>
        Deal
      </button>
    </div>
  );
};
