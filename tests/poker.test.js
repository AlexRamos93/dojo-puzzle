const Player = require("../classes/player");
const Poker = require("../classes/poker");

test("It Should return result = Flush, code = 6", () => {
  const player1 = new Player("player 1");
  const player2 = new Player("player 2");
  player1.setHand([
    { value: "A", suit: "d" },
    { value: "3", suit: "d" },
    { value: "4", suit: "d" },
    { value: "J", suit: "d" },
    { value: "10", suit: "d" },
  ]);
  player2.drawCards();

  const poker = new Poker(player1, player2);
  const result = poker.solveHand(
    player1.convertHandValues(),
    player1.convertHandSuits()
  );

  expect(result).toMatchObject({ result: "Flush", code: 6 });
});

test("It Should return player 1 as the winner", () => {
  const player1 = new Player("player 1");
  const player2 = new Player("player 2");
  player1.setHand([
    { value: "A", suit: "d" },
    { value: "3", suit: "d" },
    { value: "4", suit: "d" },
    { value: "J", suit: "d" },
    { value: "10", suit: "d" },
  ]);

  player2.setHand([
    { value: "2", suit: "d" },
    { value: "3", suit: "s" },
    { value: "4", suit: "h" },
    { value: "5", suit: "d" },
    { value: "7", suit: "c" },
  ]);

  const poker = new Poker(player1, player2);
  const result = poker.match();

  expect(result.winner).toBe("player 1");
});
