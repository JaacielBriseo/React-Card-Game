export const onDeal = (deck,selectedCards,detectAce,setAces,aces,toShow,setToDisplayCards,setCards) => {
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
}