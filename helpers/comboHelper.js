const { occurrencesOf, getLower, checkRoyalSequence } = require("./functions");
const { codes } = require("../utils/comboCodes");

// RETURN IF THE HAND HAS A STRAIGHT
function straight(values) {
  var lower = getLower(values);

  for (var i = 1; i < 5; i++) {
    if (occurrencesOf(lower + i, values) != 1) {
      return false;
    }
  }
  return true;
}

// RETURN IF THE HAND HAS PAIRS, DOUBLE PAIRS, TRIPLE CARDS...
function double(values) {
  var found = [];
  var result = "";
  for (var i = 0; i < values.length; i++) {
    var occurrences = occurrencesOf(values[i], values);
    if (occurrences > 1 && found.indexOf(values[i]) == -1) {
      result += occurrences;
      found.push(values[i]);
    }
  }
  if (result === "2") return codes.onePair;
  if (result === "22") return codes.twoPairs;
  if (result === "3") return codes.ThreeOfKind;
  if (result === "23" || result === "32") return codes.fullHouse;
  if (result === "4") return codes.fourOfKind;

  return 0;
}

// RETURN IF THE HAND HAS A FLUSH
function flush(suits) {
  for (var i = 0; i < 4; i++) {
    if (suits[i] !== suits[i + 1]) {
      return false;
    }
  }
  return true;
}

// RETURN THE HIGHER CARD
function higherCard(values) {
  return Math.max.apply(Math, values);
}

// RETURN IF THE HAND HAS A STRAIGHT FLUSH
function straightFlush(values, suits) {
  if (straight(values) && flush(suits)) return true;

  return false;
}

// RETURN IF THE HAND HAS A ROYAL FLUSH
function royalFlush(values, suits) {
  if (checkRoyalSequence(values) && flush(suits)) return true;

  return false;
}

module.exports = {
  double,
  straight,
  flush,
  higherCard,
  straightFlush,
  royalFlush,
};
