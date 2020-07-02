const Card = require("../classes/card");
const { suits, values } = require("../utils/cards");

// GENERATES A RANDOM CARD
function generateCard() {
  const value = values[Math.floor(Math.random() * (12 - 0) + 0)];
  const suit = suits[Math.floor(Math.random() * (4 - 0) + 0)];

  return new Card(value, suit);
}

// RETURNS THE LOWER NUMBER FROM AN ARRAY
function getLower(values) {
  var min = 12;

  for (var i = 0; i < values.length; i++) {
    min = Math.min(min, values[i]);
  }

  return min;
}

// CHECK THE NUMBER OF OCCURRENCES
function occurrencesOf(n, values) {
  var count = 0;
  var index = 0;

  do {
    index = values.indexOf(n, index) + 1;
    if (index == 0) {
      break;
    } else {
      count++;
    }
  } while (index < values.length);

  return count;
}

// CHECK IS THERE`S A ROYAL SEQUENCE
function checkRoyalSequence(values) {
  if (
    values.includes("10") &&
    values.includes("11") &&
    values.includes("12") &&
    values.includes("13") &&
    values.includes("14")
  )
    return true;

  return false;
}

module.exports = {
  generateCard,
  getLower,
  occurrencesOf,
  checkRoyalSequence,
};
