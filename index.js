const Player = require("./classes/player");
const Poker = require("./classes/poker");

function simulateMatch() {
  const player1 = new Player("player 1");
  const player2 = new Player("player 2");
  player1.drawCards();
  player2.drawCards();

  const poker = new Poker(player1, player2);

  return poker.match();
}

console.log(simulateMatch());
