import { configureStore } from "@reduxjs/toolkit";
import { formDataReducer } from "./reducers";

export const store = configureStore({
  reducer: formDataReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
