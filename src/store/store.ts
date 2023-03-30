import {
  applyMiddleware,
  compose,
  configureStore,
  createStore,
  Middleware,
} from "@reduxjs/toolkit";
import logger from "redux-logger";
import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./root-reducer";
import createSagaMiddleware from "redux-saga";

import { rootSaga } from "./root-saga";
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
export type RootState = ReturnType<typeof rootReducer>;

type ExtendedPersisConfing = PersistConfig<RootState> & {
  whitelist: (keyof RootState)[];
};
const persistConfig: ExtendedPersisConfing = {
  key: "root",
  storage,
  whitelist: ["cart"],
};
const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [
  process.env.NODE_ENV !== "production" && logger,
  sagaMiddleware,
].filter((middleware): middleware is Middleware => Boolean(middleware));

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
