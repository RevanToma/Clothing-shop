// import { compose, applyMiddleware, createStore } from "redux";

import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./root-reducer";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./root-saga";
// const middleWares = [logger];
// const composedEnhancers = compose(applyMiddleware(...middleWares));
// export const store = createStore(rootReducer, undefined, composedEnhancers);

const persistConfig = {
  key: "root",
  storage,
  whilelist: ["cart"],
};
const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [
    process.env.NODE_ENV !== "production" && logger,
    sagaMiddleware,
  ].filter(Boolean),
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
