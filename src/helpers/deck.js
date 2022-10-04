export const deck = [];
const suits = ['♦', '♠', '♣', '♥'];
const values = [
  'Ace',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'J',
  'Q',
  'K',
];

suits.forEach((suit) => {
  values.forEach((value) => {
    deck.push(`${value + suit}`);
  });
});

