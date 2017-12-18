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
  let counter = 0
  while(coinToss()) {
    counter++
    console.log(`You got ${counter + 1} tails in a row!`)
  };
}
