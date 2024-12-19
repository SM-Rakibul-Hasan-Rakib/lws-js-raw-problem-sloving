function PandCopst(singara, jilapi, samucha) {
  if (
    (typeof singara !== "number",
    typeof jilapi !== "number",
    typeof samucha !== "samucha")
  ) {
    return "Please provide valid intger Number";
  } else if (singara < 0 || jilapi < 0 || samucha < 0) {
  } else {
    const singraaPrice = 7;
    const jilapiPrice = 10;
    const samuchaPrice = 15;

    const total =
      singara * singraaPrice + jilapi * jilapiPrice + samucha * samuchaPrice;

    return total;
  }
}

console.log(PandCopst(56, 100));
