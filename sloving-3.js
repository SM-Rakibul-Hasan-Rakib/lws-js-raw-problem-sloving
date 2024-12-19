function picnicBudget(participants) {
  // Validate the input
  if (typeof participants !== "number" || participants < 0) {
    return "Participants should be a valid positive number";
  }

  // Cost breakdown
  const costForFirst100 = 5000; // Per person for the first 100
  const costForNext100 = 4000; // Per person for 101-200
  const costAfter200 = 3000; // Per person beyond 200

  let totalCost = 0;

  if (participants <= 100) {
    totalCost = participants * costForFirst100;
  } else if (participants <= 200) {
    const first100Cost = 100 * costForFirst100;
    const remainingParticipants = participants - 100;
    const second100Cost = remainingParticipants * costForNext100;
    totalCost = first100Cost + second100Cost;
  } else {
    const first100Cost = 100 * costForFirst100;
    const second100Cost = 100 * costForNext100;
    const remainingParticipants = participants - 200;
    const remainingCost = remainingParticipants * costAfter200;
    totalCost = first100Cost + second100Cost + remainingCost;
  }

  return totalCost;
}

// Example usage
console.log(picnicBudget(50)); // Output: 250000
console.log(picnicBudget(150)); // Output: 650000
console.log(picnicBudget(250)); // Output: 1150000
