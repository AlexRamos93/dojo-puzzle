const {
  double,
  straight,
  flush,
  higherCard,
  straightFlush,
  royalFlush,
} = require("../helpers/comboHelper");

class Poker {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }

  // SIMULATES THE A POKER MATCH BETWEEN TWO PLAYERS
  match() {
    const solution1 = this.solveHand(
      this.player1.convertHandValues(),
      this.player1.convertHandSuits()
    );

    const solution2 = this.solveHand(
      this.player2.convertHandValues(),
      this.player2.convertHandSuits()
    );

    if (!solution1.code && solution2.code)
      return this.printWinner(this.player2, solution2, this.player1);
    if (!solution2.code && solution1.code)
      return this.printWinner(this.player1, solution1, this.player2);

    if (
      (!solution1.code && !solution2.code) ||
      solution1.code === solution2.code
    ) {
      const higher1 = higherCard(this.player1.convertHandValues());
      const higher2 = higherCard(this.player2.convertHandValues());

      if (higher1 > higher2)
        return this.printWinner(this.player1, "Higher Card", this.player2);
      if (higher1 === higher2) return "Tied Match";
      else return this.printWinner(this.player2, "Higher Card", this.player1);
    }

    if (solution1.code > solution2.code)
      return this.printWinner(this.player1, solution1, this.player2);
    if (solution2.code > solution1.code)
      return this.printWinner(this.player2, solution2, this.player1);
    else return "Tied Match";
  }

  // RETURNS WHICH COMBO A GIVEN HAND HAS
  solveHand(values, suits) {
    let code = double(values);
    let result = "";

    switch (code) {
      case 2:
        result = "1 Pair";
        break;
      case 3:
        result = "2 Pairs";
        break;
      case 4:
        result = "3 of a kind";
        break;
      case 7:
        result = "Full house";
        break;
      case 8:
        result = "4 of a kind";
        break;
      default:
        if (flush(suits)) {
          result = "Flush";
          code = 6;
        }

        if (straight(values)) {
          result = "Straight";
          code = 5;
        }

        if (straightFlush(values, suits)) {
          result = "Straight Flush";
          code = 9;
        }

        if (royalFlush(values, suits)) {
          result = "Royal Flush";
          code = 10;
        }
        break;
    }

    return { result, code };
  }

  // PRINTS THE FINAL RESULT
  printWinner(winner, solution, loser) {
    return {
      winner: winner.name,
      winner_hand: winner.getHand(),
      combo: solution.result ? solution.result : solution,
      loser_hand: loser.getHand(),
    };
  }
}

module.exports = Poker;
