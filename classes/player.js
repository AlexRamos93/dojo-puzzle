const { generateCard } = require("../helpers/functions");

class Player {
  constructor(name) {
    this.name = name;
    this.hand = [];
  }

  // GENERATES 5 RANDOM CARDS
  drawCards() {
    for (let i = 0; i < 5; i++) {
      this.hand.push(generateCard());
    }

    return this.hand;
  }

  // RETURN A READABLE HAND
  getHand() {
    return this.hand.map((card) => card.print());
  }

  // CONVERT THE SUITS IN NUMBERS
  convertHandSuits() {
    const suits = [];

    this.hand.map((v) => {
      switch (v.suit) {
        case "d":
          suits.push("1");
          break;
        case "h":
          suits.push("2");
          break;
        case "s":
          suits.push("3");
          break;
        case "c":
          suits.push("4");
          break;
        default:
          break;
      }
    });

    return suits;
  }

  // CONVERT THE VALUES IN NUMBERS
  convertHandValues() {
    const values = [];

    this.hand.map((v) => {
      switch (v.value) {
        case "A":
          values.push("14");
          break;
        case "J":
          values.push("11");
          break;
        case "Q":
          values.push("12");
          break;
        case "K":
          values.push("13");
          break;
        default:
          values.push(v.value);
          break;
      }
    });

    return values;
  }
}

module.exports = Player;
