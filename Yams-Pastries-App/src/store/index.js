import { configureStore } from '@reduxjs/toolkit';
import diceReducer from '../features/diceFeature/diceReducer'

export const store = configureStore({
  reducer: {
    dice: diceReducer,
  },
})

export default store;
