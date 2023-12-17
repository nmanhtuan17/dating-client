import {combineReducers, configureStore} from "@reduxjs/toolkit";
import { persistStore, persistReducer} from "redux-persist"
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from "redux-persist/es/constants";
import {useDispatch, useSelector} from "react-redux";
import {appSlice} from "./Slice/app.slice";
import storage from 'redux-persist/lib/storage';
import {authSlice} from "./Slice/auth.slice";

export const reducers = combineReducers({
  app: appSlice.reducer,
  auth: authSlice.reducer
})

const persistConfig = {
  key: 'root',
  storage: storage,
  timeout: 100000,

}
const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
      immutableCheck: false,
    })
})

const persistor = persistStore(store)

export const useAppDispatch = () => useDispatch()
export const useAppSelector = useSelector

export {store, persistor}

