const {
  getLower,
  occurrencesOf,
  checkRoyalSequence,
} = require("../helpers/functions");

test("Should print the lower number", () => {
  const lower = getLower([1, 2, 3]);

  expect(lower).toBe(1);
});

test("Should return number 2", () => {
  const occurrences = occurrencesOf(1, [1, 2, 3, 1]);

  expect(occurrences).toBe(2);
});

test("Should return false", () => {
  const sequence = checkRoyalSequence(["10", "11", "13", "12", "3"]);

  expect(sequence).toBe(false);
});

test("Should return true", () => {
  const sequence = checkRoyalSequence(["14", "11", "13", "12", "10"]);

  expect(sequence).toBe(true);
});
