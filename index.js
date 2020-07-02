const Player = require("./classes/player");
const Poker = require("./classes/poker");

const player1 = new Player("player 1");
const player2 = new Player("player 2");
player1.drawCards();
player2.drawCards();

// console.log(player1.getHand());
// console.log(player2.getHand());
const poker = new Poker(player1, player2);
console.log(poker.match());
