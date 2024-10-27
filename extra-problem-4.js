function details(info) {
  if (typeof info !== "object") {
    return "thik tak object deha";
  } else if (!info.name || !info.age) {
    return "object must contain name and age property";
  } else if (typeof info.name !== "string" || typeof info.age !== "string") {
    return "name should be string,  age should be a number ";
  } else if (info.age <= 0) {
    return "AGE SHOULD BE A POSTIVE NUMBER";
  }
  return `my name is : ${info.name}, my age is : ${info.age}`;
}

console.log(details({ name: "Rakib", age: 18 }));
