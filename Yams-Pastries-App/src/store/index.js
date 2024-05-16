import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { pastriesApi } from "../features/pastriesFeature/pastriesReducer";
import { diceReducer } from "../features/diceFeature/diceReducer";
import { authApi } from "../features/authFeature/authReducer";

export const store = configureStore({
  reducer: {
    dice: diceReducer,
    [pastriesApi.reducerPath]: pastriesApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(pastriesApi.middleware)
      .concat(authApi.middleware),
});

setupListeners(store.dispatch);
