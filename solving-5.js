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
    }
  }
}

console.log(picnicBudgets(10));
