export const rollNewDiceValues = (newValues) => {
  return newValues.map(() => Math.floor(Math.random() * 6) + 1);
};


export const checkWinCondition = (diceValues) => {
  console.log('Checking win conditions');
 
  const counts = diceValues.reduce((acc, value) => {
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {}); 
  console.log(counts)
  const occurrences = Object.values(counts);
  const hasPair = occurrences.includes(2);
  const hasThreeOfAKind = occurrences.includes(3);
  const hasFourOfAKind = occurrences.includes(4);

  if (hasFourOfAKind) {
    return { win: true, prize: 3 }; 
  } else if (hasThreeOfAKind) {
    return { win: true, prize: 2 }; 
  } else if (hasPair) {
    return { win: true, prize: 1 }; 
  }
  return { win: false, prize: 0 };
}