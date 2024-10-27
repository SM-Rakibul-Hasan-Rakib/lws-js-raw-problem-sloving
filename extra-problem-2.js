// check if the number is even or odd
// macknisom
const num = 6;
function checkEvenOdd(x) {
  if (x % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

const result = checkEvenOdd("The last number is a ");
console.log(result);

// normal funcation declear

const number = 5;

function finalNumber(x) {
  if (5 % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}
finalNumber(number);

function printName(x) {
  for (let i = 1; i <= x; i++) {
    console.log("Rakib");
  }
}

printName(3);
