import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { appReducers } from "../reducers";

export function makeStore() {
  return configureStore({
    reducer: appReducers,
    middleware: [logger],
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
