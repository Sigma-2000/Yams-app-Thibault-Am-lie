import { createSlice } from "@reduxjs/toolkit";
import { rollNewDiceValues, checkWinCondition } from "../../services/game";

//possible amélioration créer d'autres actions ? 
const diceSlice = createSlice({
  name: "dice",
  initialState: {
    diceValues: ["?", "?", "?", "?", "?"],
    trials: 3,
    hasWon: false,
    gameActive: true,
    message: "",
  },
  reducers: {
    rollDice(state) {
      if (state.gameActive && state.trials > 0) {
        state.diceValues = rollNewDiceValues(state.diceValues);
        const winCheck = checkWinCondition(state.diceValues);
        state.hasWon = winCheck.win;
        if (state.hasWon) {
          state.message = `Bravo vous avez gagné ${winCheck.prize} pâtisserie(s)! Appelez nous au 06.14.13.12.07`; 
        } else {
          state.message = "Retentez votre chance!"; 
        }
        state.trials -= 1;
      }
      if (state.trials === 0 ||state.hasWon) {
        state.gameActive = false;
        if (!state.hasWon) {
          state.message = "Dommage, vous n'avez plus d'essais."; 
        }
      }
    },
  },
});

export default diceSlice.reducer;
export const { rollDice } = diceSlice.actions;
