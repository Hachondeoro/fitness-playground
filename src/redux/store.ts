import bodyReducer from "@redux/slices/bodydata";
import mealReducer from "@redux/slices/mealplan";
import controlsReducer from "@redux/slices/controls";
import { configureStore } from "@reduxjs/toolkit";

// Persist state
// prettier-ignore
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,} from "redux-persist"
import storage from 'redux-persist/lib/storage'
import {combineReducers} from '@reduxjs/toolkit';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const combinedReducer = combineReducers({
  bodydata: bodyReducer,
  mealplan: mealReducer,
  controls: controlsReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'bodydata/resetBodyData') {
    state = undefined
  }
  return combinedReducer(state, action)
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)

// End Persist state

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
