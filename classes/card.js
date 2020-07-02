class Card {
  constructor(value, suit) {
    this.value = value;
    this.suit = suit;
  }

  // PRINTS A READABLE CARD
  print() {
    return `${this.value}${this.suit}`;
  }
}

module.exports = Card;
