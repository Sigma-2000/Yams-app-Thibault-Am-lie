import { createSlice } from "@reduxjs/toolkit";
import { rollNewDiceValues, checkWinCondition } from "../../services/game";

const diceSlice = createSlice({
  name: "dice",
  initialState: {
    diceValues: ["?", "?", "?", "?", "?"],
    trials: 3,
    hasWon: false,
    gameActive: true,
  },
  reducers: {
    rollDice(state) {
      if (state.gameActive && state.trials > 0) {
        state.diceValues = rollNewDiceValues(state.diceValues);
        state.hasWon = checkWinCondition(state.diceValues);
        state.trials -= 1;
      }
      if (state.trials === 0 || state.hasWon) {
        state.gameActive = false;
      }
    },
  },
});

export default diceSlice.reducer;
export const { rollDice } = diceSlice.actions;
