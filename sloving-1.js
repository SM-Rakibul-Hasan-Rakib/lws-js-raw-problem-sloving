function AnaToVori(Ana) {
  if (typeof Ana !== "number" || Ana < 0) {
    return "please provide a valid integer number";
  } else {
    const vori = Ana * 0.0625;
    return vori;
  }
}

console.log(AnaToVori(22));
