const {
  straight,
  double,
  flush,
  higherCard,
  straightFlush,
  royalFlush,
} = require("../helpers/matchHelper");

test("Should return true", () => {
  const isStraight = straight([2, 3, 4, 5, 6]);

  expect(isStraight).toBe(true);
});

test("Expect to return 0", () => {
  const isDouble = double([1, 2, 3, 4, 9]);

  expect(isDouble).toBe(0);
});

test("Expect to return false", () => {
  const isFlush = flush([1, 2, 1, 2]);

  expect(isFlush).toBe(false);
});

test("Expect to return the higher number", () => {
  const higher = higherCard([-1, 2, 8, 10, 8]);

  expect(higher).toBe(10);
});

test("Expect to return true", () => {
  const isStraightFlush = straightFlush([2, 3, 4, 5, 6], [1, 1, 1, 1, 1]);

  expect(isStraightFlush).toBe(true);
});

test("Expect to return true", () => {
  const isRoyalFlush = royalFlush(
    ["14", "12", "13", "11", "10"],
    [1, 1, 1, 1, 1]
  );

  expect(isRoyalFlush).toBe(true);
});
