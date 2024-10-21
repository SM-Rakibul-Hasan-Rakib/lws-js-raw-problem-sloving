// the number small to big count
const roolNumber = [
  "3",
  "67",
  "12",
  "45",
  "100",
  "109",
  "98",
  "1",
  "2",
  "6",
  "86",
];

const rolls = roolNumber.sort(function (a, b) {
  return a - b;
});

console.log(rolls);

// the number big small count

const employ = [
  "3",
  "67",
  "12",
  "45",
  "100",
  "109",
  "65",
  "85",
  "98",
  "1",
  "2",
  "6",
  "86",
];

const employers = employ.sort(function (a, b) {
  return b - a;
});

console.log(employers);
