import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist"
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from "redux-persist/es/constants";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { appSlice } from "@/store/Slice/app.slice";
import storage from 'redux-persist/lib/storage';
import { authSlice } from "@/store/Slice/auth.slice";
import { appMiddleware } from "@/store/middleware/app.middleware";
import {messageSlice} from "@/store/Slice/message.slice.ts";
import {notificationSlice} from "@/store/Slice/notification.silce.ts";
import {postSlice} from "@/store/Slice/post.slice.ts";
import { createBlacklistFilter } from "redux-persist-transform-filter";


export const reducers = combineReducers({
  app: appSlice.reducer,
  auth: authSlice.reducer,
  message: messageSlice.reducer,
  notification: notificationSlice.reducer,
  post: postSlice.reducer
})

const postBlackList = createBlacklistFilter("post", [
  "selectedPost",
]);

const appBlacklist = createBlacklistFilter("app", [
  "filter",
]);

const persistConfig = {
  key: 'root',
  storage: storage,
  timeout: 100000,
  blacklist: [],
  transforms: [postBlackList, appBlacklist]

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
    }).prepend(appMiddleware.middleware)
})

const persistor = persistStore(store)



export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export { store, persistor }

