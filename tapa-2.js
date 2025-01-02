let greeting = "Hello";

function sayGreeting(name) {
  return `${greeting},${name}`;
}
let greetingValue = "Hello";

function sayGreeting(name) {
  return `${greeting}, ${name}`;
}

console.log = sayGreeting("Rakib");
