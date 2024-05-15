import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { pastriesApi } from "../features/pastriesFeature/pastriesReducer";

export const store = configureStore({
  reducer: {
    [pastriesApi.reducerPath]: pastriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pastriesApi.middleware),
});

setupListeners(store.dispatch);
