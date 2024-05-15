export const rollNewDiceValues = (newValues) => {
  return newValues.map(() => Math.floor(Math.random() * 6) + 1);
};

export const checkWinCondition = (diceValues) => {
  console.log('Checking win conditions');
 
  const counts = diceValues.reduce((acc, value) => {
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {}); 

  const occurrences = counts;
  const hasPair = occurrences.includes(2);
  const hasThreeOfAKind = occurrences.includes(3);
  const hasFourOfAKind = occurrences.includes(4);

  if (hasFourOfAKind) {
    console.log('Four of a kind detected - Win 3 pastries');
    return { win: true, prize: 3 }; 
  } else if (hasThreeOfAKind) {
    console.log('Three of a kind detected - Win 2 pastries');
    return { win: true, prize: 2 }; 
  } else if (hasPair) {
    console.log('Pair detected - Win 1 pastry');
    return { win: true, prize: 1 }; 
  }

 
  console.log('No win condition met');
  return { win: false, prize: 0 };
}