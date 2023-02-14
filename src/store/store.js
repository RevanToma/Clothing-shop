import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./root-reducer";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./root-saga";

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
