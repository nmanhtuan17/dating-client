import {createListenerMiddleware} from "@reduxjs/toolkit";
import {getUsers} from "@/store/Action/app.action.ts";


export const appMiddleware = createListenerMiddleware();

appMiddleware.startListening({
  predicate: (action) => {
    return action.type?.startsWith("auth/login") || action.type?.startsWith("user/upload-avatar")
  },
  effect: async (action, listenerApi) => {
    switch (action.type) {
      case 'auth/login/fulfilled':
        listenerApi.dispatch(getUsers());
        break;
      case 'user/upload-avatar/fulfilled':
        listenerApi.dispatch(getUsers());
        break;
    }
  }
})
