import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { pastriesApi } from "../features/pastriesFeature/pastriesReducer";
import { diceReducer } from "../features/diceFeature/diceReducer";
import { authApi } from "../features/authFeature/authReducer";
import { crudApi } from "../features/crudFeature/crudReducer";

export const store = configureStore({
  reducer: {
    dice: diceReducer,
    [pastriesApi.reducerPath]: pastriesApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [crudApi.reducerPath]: crudApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(pastriesApi.middleware)
      .concat(authApi.middleware)
      .concat(crudApi.middleware),
});

setupListeners(store.dispatch);
