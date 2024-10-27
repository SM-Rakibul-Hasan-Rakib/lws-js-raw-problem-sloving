// validations
function add(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    return "thik tak number dea";
  }
  return x + y;
}

console.log(add(4, "8"));

// ---------/---------
function details(info) {
  return `my name is : ${info.name}. my age is : ${info.age}`;
}

console.log(details({ name: "Rakib", age: "18" }));

// -----/-----

// function detail(infos) {
//   if (typeof infos !== "object" || infos.names || infos.ages) {
//     return "thik thak object deha";
//   }
// }
// detail();
