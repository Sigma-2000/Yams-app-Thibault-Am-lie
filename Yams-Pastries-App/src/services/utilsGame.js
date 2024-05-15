export const rollNewDiceValues = (newValues) => {
  return newValues.map(() => Math.floor(Math.random() * 6) + 1);
};

