//1

// . Create a function that every time you invoke it, it will print out the message “Congrats you earn the chance!“, however it can only print out the message with the first 5 invokes. all the rest invokes will print out the message “Sorry you missed the chance” (run function once count as 1 invoke) (hint : using closure)
function earnChance() {
  let count = 0;
  return function () {
    count += 1;
    if (count <= 5) {
      console.log("Congrats you earn the chance!");
    } else {
      console.log("Sorry you missed the chance");
    }
  };
}
const closure = earnChance();

// print only 5 times then rest is sorry
for (let i = 0; i < 8; i++) {
  closure();
}

//2
function longerThan(minimumLength) {
  return (element) => {
    return element.length > minimumLength;
  };
}

//test #2
let minimumLength = 3;
console.log(
  ["this", "is", "a", "string", "array"].filter(longerThan(minimumLength))
);
