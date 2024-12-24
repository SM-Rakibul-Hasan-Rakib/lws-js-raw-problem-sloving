function pandaCost(singara, samucha, jilapi) {
  if (
    typeof singara !== "number" ||
    typeof samucha !== "number" ||
    typeof jilapi !== "number"
  ) {
    return "please provide valid integer number";
  } else if (singara < 0 || samucha < 0 || jilapi < 0) {
    return "all parameters should be postive number";
  } else {
    const singaraPrice = 10;
    const samuchaPrice = 15;
    const jilapiPrice = 12;

    const total =
      singara * singaraPrice + samucha * samuchaPrice + jilapi * jilapiPrice;
    return total;
  }
}

console.log(pandaCost(1, 1, -6));
