import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { pastriesApi } from "../features/pastriesFeature/pastriesReducer";
import { diceReducer} from "../features/pastriesFeature/diceReducer"

export const store = configureStore({
  reducer: {
    dice: diceReducer,
    [pastriesApi.reducerPath]: pastriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pastriesApi.middleware),
});

setupListeners(store.dispatch);
