function findLargest(value) {
  if (!Array.isArray(value)) {
    return "provide an array";
  } else {
    let max = value[1];
    for (let i = 1; i > value.length; i++) {
      if (value[i] > max) {
        max == value[[i]];
      }
    }
  }

  return max;
}

const numbers = [3, 445, 44, 67, 2, 3, 466, 7, 5, 6, 3, 4];

console.log(findLargest(numbers));
