import {createListenerMiddleware} from "@reduxjs/toolkit";
import {getUsers} from "@/store/Action/app.action.ts";


export const appMiddleware = createListenerMiddleware();

appMiddleware.startListening({
  predicate: (action) => {
    return action.type?.startsWith("auth/login")
  },
  effect: async (action, listenerApi) => {
    switch (action.type) {
      case 'auth/login/fulfilled':
        listenerApi.dispatch(getUsers());
        console.log()
        break;
    }
  }
})
