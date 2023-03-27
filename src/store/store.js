// import { compose, applyMiddleware, createStore } from "redux";

import { configureStore } from "@reduxjs/toolkit";

import logger from "redux-logger";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import { rootReducer } from "./root-reducer";
// import thunk from "redux-thunk";
// const middleWares = [logger];
// const composedEnhancers = compose(applyMiddleware(...middleWares));
// export const store = createStore(rootReducer, undefined, composedEnhancers);

// const persistConfig = {
//   key: "root",
//   storage,
//   whilelist: ["cart"],
// };
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: [process.env.NODE_ENV !== "production" && logger, thunk].filter(
//     Boolean
//   ),
// });

const middleWares = [process.env.NODE_ENV !== "production" && logger].filter(
  Boolean
);
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middleWares),
});
// export const persistor = persistStore(store);
