// Code your solutions in this file
const names = ['Ada', 'Brendan', 'Ali']

function printBadges(names) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Welcome ${names[i]}! You are employee #${i + 1}.`)
  }
  return names
}

printBadges(names);

function coinToss() {
  return Math.random () >= .5;
}

function tailsNeverFails() {
  while(coinToss()) {
    console.log("You got" + " tails in a row!");
  }
}
