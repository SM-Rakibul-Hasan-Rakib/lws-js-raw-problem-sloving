function add(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    return "Thik tak Number dea";
  }
  return x + y;
}

console.log(add(4, 6));

function details(info) {
  return `my name is : ${info.name}, my name is ${info.age}`;
}

console.log(details({ name: "Rakib", age: "19" }));
