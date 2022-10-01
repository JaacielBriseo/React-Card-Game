export const DealButton = ({ deck, setCards, setToDisplayCards }) => {
  const selectedCards = [];
  const toShow = [];
  const handleDeal = () => {
    for (let index = 0; index < 5; index++) {
      const random = Math.floor(Math.random() * deck.length);
      const randomValue = deck[random];
      selectedCards.push(randomValue);
      setCards(deck.splice(random, 1));
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
