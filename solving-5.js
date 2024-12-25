function picnicBudget(perticipents) {
  if (typeof perticipents !== "number" || perticipents < 0) {
    return "perticipents should be a valid postive number ";
  } else {
    let first100Cost = 0;
    let secons101Cost = 0;
    let remiCost = 0;
    let totalCost = 0;

    if (perticipents <= 100) {
      first100Cost = perticipents * 5000;
      return first100Cost;
    } else if (perticipents <= 200) {
      first100Cost = 5000 * 100;
      reminingCost = (perticipents - 100) * 4000;
      total = first100Cost + remiCost;
      return total;
    }
  }
}
// return picnicBudget;
console.log(picnicBudgets(1001));
